import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewsEntity } from "../../domain/entites/news.entity";
import { Repository } from "typeorm";
import { NewsDto } from "../dto/news.dto";
import * as path from "path";
import * as fs from "fs"

@Injectable()
export class NewsService {
    constructor(@InjectRepository(NewsEntity) private repo: Repository<NewsEntity>) { }
    async createNews(dto: NewsDto, file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException("you should upload image also ")
        }
        const uploadPath = path.join(__dirname, "..", "..", "./uploads")
        const filepath = path.join(uploadPath, file.originalname)
        if (fs.existsSync(filepath)) {
            throw new BadRequestException("the given image already have in system")
        }
        fs.writeFileSync(filepath, file.buffer)
        const response = {
            status: 201,
            massage: "news seccessfully created"
        }
        return response
    }
    async getNews(dto: NewsDto) {
        const check = await this.repo.find()
        if (check.length <= 1) {
            return check
        } else {
            throw new InternalServerErrorException("news not created yet")
        }
    }
}