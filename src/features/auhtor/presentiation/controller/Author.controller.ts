import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthorService } from "../../application/service/author.service";
import { Auhtors } from "../../domain/entites/auhtor.entity";

@Controller("author")
@ApiTags("author")
export class AuthorController {
    constructor(private readonly service: AuthorService) { }
    @Post()
    async createAuhtor(@Body() dto: Auhtors) {
        return await this.service.createAuthor(dto)
    }

}