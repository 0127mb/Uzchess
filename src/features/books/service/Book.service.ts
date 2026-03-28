import { Injectable, BadRequestException, InternalServerErrorException, MethodNotAllowedException, NotFoundException } from "@nestjs/common";
import { createBookDto } from "../application/dto/create-book.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { BookEntity } from "../domain/entites/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepo: Repository<BookEntity>
    ) { }

    async createBook(
        dto: createBookDto,
        file?: Express.Multer.File
    ): Promise<BookEntity> {
        try {
            if (!file) {
                throw new BadRequestException("book image  is required");
            }

            const book = BookEntity.create()
            await this.bookRepo.save(book);
            return book;
        } catch (error) {
            console.error("Error creating book:", error);
            throw new MethodNotAllowedException("Failed to create book");
        }
    }
    async getBook(){
     
        const book =  await this.bookRepo.find()
        if(book.length === 0){
            throw new NotFoundException("book not created yet")

        }
           return await this.bookRepo.find()
    }

    
}
