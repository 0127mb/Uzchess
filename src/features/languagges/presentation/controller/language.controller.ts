import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { LanguageService } from "../../application/service/language.service";
import { ApiTags } from "@nestjs/swagger";
import { languageDto } from "../../application/dto/language.dto";
import { Languages } from "../../domain/entites/languages.entity";
@ApiTags("language")
@Controller("language")
export class LanguageController {
    constructor(private readonly service: LanguageService) { }
    @Post()
    async Postlang(@Body() dto: languageDto): Promise<Languages> {
        return await this.service.createLanguge(dto)
    }
    @Get()
    async getLnag(@Query() query: languageDto): Promise<Languages[]> {
        return this.service.getLanguage(query)
    }
}