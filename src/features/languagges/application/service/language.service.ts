import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Languages } from "../../domain/entites/languages.entity";
import { Repository } from "typeorm";
import { languageDto } from "../dto/language.dto";

@Injectable()
export class LanguageService {
    constructor(@InjectRepository(Languages)
    private repo: Repository<Languages>) { }
    async createLanguge(dto: languageDto): Promise<Languages> {
         const exist = await this.repo.findOne({
            where: { title: dto.title, code: dto.code },
        })
        if (!exist) {
            throw new BadRequestException("the given title or code already exist ")
        }
        else {
            const good = {
                status: 201,
                message: "language seccussfully added my friend if you wan to see it use get request post request only do post 😂"

            }
        }
        const language = this.repo.create(dto)
        await this.repo.save(language)
        return language
    }
    async getLanguage(query?: languageDto): Promise<Languages[]> {
        const exist = await this.repo.findOne({
            where: { title: query.title, code: query.code },
        })
        if (exist) {
     
            return await Languages.find()
        }
    }
}
