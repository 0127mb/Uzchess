import { Body, Controller, Query } from "@nestjs/common";
import { BookReviewsService } from "../../service/Book.reviews.service";
import { CreateBookReviews } from "../../application/dto/create-book-reviews.dto";
import { GetBookReviews } from "../../application/dto/get-book-reviews.dto";

@Controller("Book-reviews")
export class BookReviewsController {
    constructor(private readonly service: BookReviewsService) { }
    async create(@Body() dto: CreateBookReviews) {
        return this.service.create(dto)
    }
    async getall(@Query() query: GetBookReviews) {
        return this.service.getall(query)
    }
}
