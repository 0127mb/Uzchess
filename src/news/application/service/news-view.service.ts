import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewsViewsEntity } from "../../domain/entites/news-views.entity";
import { Repository } from "typeorm";

@Injectable()
export class NewsViewsService {
    constructor(@InjectRepository(NewsViewsEntity)
    private repo: Repository<NewsViewsEntity>) { }
    async createNews(newsId: number) {
        const exist = await this.repo.findOne({
            where: { newsId }
        })
        if (!exist) {
            const count = await this.repo.save({ newsId, count: 1 })
        }
        exist.count += 1
        const save = await this.repo.save(exist)
        return save
    }
    async getViews() {
        return await this.repo.find()
    }
}
