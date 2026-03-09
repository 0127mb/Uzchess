import { Body, Controller, Post, Get, Query } from "@nestjs/common";
import {  ApiTags } from "@nestjs/swagger";
import { BookCategoryService } from "../../service/Book-category.service";
import { CreateBookCategory } from "../../application/dto/create-book-category.dto";

@Controller("BookCategory")
@ApiTags("BookCategory")


export class BookCategoryController {
    constructor(private readonly categoryService: BookCategoryService) { }
    @Post()
    async creaCategory(@Body() dto: CreateBookCategory) {
        return await this.categoryService.create(dto)
    }
    @Get()
    async getBookCategory(@Query() query: CreateBookCategory) {
        return await this.categoryService.findAll(query)
    }

}