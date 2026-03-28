import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReportCategoriesEntity } from "../../domain/entites/report-categories.entity";
import { ReportsCategoryDto } from "../dto/reports-category.dto";


@Injectable()
export class ReportCategoryService {
    constructor(@InjectRepository(ReportCategoriesEntity) private repo: Repository<ReportCategoriesEntity>) { }
    async createRepots(dto: ReportsCategoryDto) {
        const check = this.repo.findOne({
            where: { title: dto.title }
        })
        if (!check) {
            throw new BadRequestException("title should be unqiue the given title aready exists my friend")
        }
        else {
            const create =  this.repo.create(dto)
            const save = await this.repo.save(create)
            const response = {
                status: 201,
                message: 'report send it seccessfully the answer should send between 3day you will see it'
            }
            return response
        }
    }
    async getreportTypes(dto: ReportsCategoryDto) {
        const exist = await this.repo.find({
            where: {
                title: dto.title,
                order: dto.order
            },
            relations: [
                "reports"
            ]
        })
        if (exist.length >= 1) {
            const response = await this.repo.find()
            return response
        }
        else {
            throw new NotFoundException("the given title or order could not founded or not added ")
        }
    }
}
