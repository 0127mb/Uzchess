import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBookCategory } from "../application/dto/create-book-category.dto";
import { BookCategoryEntity } from "../domain/entites/book-category.entity";
import { GetBookCategoryDto } from "../application/dto/get-book-category.dto";


@Injectable()
export class BookCategoryService {
    constructor(
        @InjectRepository(BookCategoryEntity)
        private categoryRepo: Repository<BookCategoryEntity>
    ) {}

    async create(dto: CreateBookCategory): Promise<BookCategoryEntity> {
        const bookcategory = this.categoryRepo.create(dto);
        return await this.categoryRepo.save(bookcategory);
    }
    async findAll(query?:GetBookCategoryDto):Promise<BookCategoryEntity[]>{
        const qb = this.categoryRepo.createQueryBuilder("category")
        if(query?.title){
            qb.where(" book category title like title",{title: `%${query.title}`})
        }
        return qb.getMany()
    }
}
