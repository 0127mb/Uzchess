import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { NewsService } from "../../application/service/news.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { NewsDto } from "../../application/dto/news.dto";

@Controller("news")
@ApiTags("News")
export class NewsController {
    constructor(private readonly service: NewsService) { }
    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(
        FileInterceptor("image")
    )
    async createNews(@Body() dto: NewsDto, @UploadedFile() file: Express.Multer.File) {
        return this.service.createNews(dto, file)
    }
    @Get()
    async getNews(@Body() dto: NewsDto) {
        return await this.service.getNews(dto)
    }
}