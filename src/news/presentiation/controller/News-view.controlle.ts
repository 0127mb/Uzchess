import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { NewsViewsService } from "../../application/service/news-view.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("views")
@Controller("views")
export class NewsViewsController {
    constructor(
        private readonly service: NewsViewsService
    ) { }
    @Post(":newsId")
    async createViews(@Param("newsId", ParseIntPipe) newsId: number) {
        return await this.service.createNews(newsId)
    }
    @Get()
    async getAll() {
        return this.service.getViews();
    }
}