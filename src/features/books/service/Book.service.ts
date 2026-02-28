import { Injectable, BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { createBookDto } from "../application/dto/create.book.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { BookEntity } from "../domain/entites/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepo: Repository<BookEntity>
    ) {}

    async createBook(
        dto: createBookDto,
        file?: Express.Multer.File
    ): Promise<BookEntity> {
        try {
            if (!file) {
                throw new BadRequestException("File is required");
            }

            const bookData = new BookEntity();
            bookData.title = dto.title;
            bookData.description = dto.description;
            bookData.price = parseFloat(dto.price.toString());
            bookData.newPrice = dto.newPrice ? parseFloat(dto.newPrice.toString()) : undefined;
            bookData.pages = dto.pages;
            bookData.pubDate = new Date(dto.pubDate);
            bookData.image = file.filename;
            bookData.reviewsCount = 0;
            bookData.rating = undefined;
            bookData.author = { id: dto.authorId } as any;
            bookData.category = { id: dto.categoryId } as any;
            bookData.language = { id: dto.languageId } as any;
            bookData.difficulty = { id: dto.difficultyId } as any;

            const book = await this.bookRepo.save(bookData);
            return book;
        } catch (error) {
            console.error("Error creating book:", error);
            throw new InternalServerErrorException("Failed to create book");
        }
    }
}
