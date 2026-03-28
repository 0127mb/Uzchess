import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewsEntity } from "./domain/entites/news.entity";
import { NewsViewsEntity } from "./domain/entites/news-views.entity";
import { NewsService } from "./application/service/news.service";
import { NewsViewsService } from "./application/service/news-view.service";
import { NewsController } from "./presentiation/controller/News.controller";
import { NewsViewsController } from "./presentiation/controller/News-view.controlle";

@Module({
    imports: [TypeOrmModule.forFeature([
        NewsEntity,
        NewsViewsEntity
    ])],
    controllers: [NewsController, NewsViewsController],
    providers: [NewsService, NewsViewsService],
    exports: [NewsService, NewsViewsService]
})
export class NewsModule { }