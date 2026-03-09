import { Body, Controller, Post, Query } from "@nestjs/common";
import { BooklikesService } from "../../service/Book.likes.service";
import { CreateBookLikes } from "../../application/dto/create-book-likes.dto";
import { GetBooklikesDto } from "../../application/dto/get-book-likes.dto";


@Controller("Book-Likes")
export class BookLikesController {
    constructor(private readonly likesService: BooklikesService) { }
    @Post()
    async createLikes(@Body() dto: CreateBookLikes) {
        return this.likesService.createLikes(dto)
    }
    async getall(@Query() query: GetBooklikesDto) {
        return this.likesService.getall(query)
    }

}