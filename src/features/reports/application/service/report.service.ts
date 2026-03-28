import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReportsEntity } from "../../domain/entites/reports.entity";
import { Between, Repository } from "typeorm";
import { ReportsDto } from "../dto/reports.dto";

@Injectable()
export class ReportService {
    constructor(@InjectRepository(ReportsEntity) private repo: Repository<ReportsEntity>) { }
    async sendReport(dto: ReportsDto) {
        const exist = this.repo.findOne({
            where: { date: dto.date }
        })
        if (exist) {
            throw new BadRequestException("you can send report no more than 1times a day")
        }
        else {
            const create = this.repo.create(dto)
            const save = await this.repo.save(create)
            const response = {
                status: 201,
                message: "report successfully send",
                data:save
            }
            return response
        }

    }
    async getReport( date: string): Promise<ReportsEntity[]> {
        const data = new Date(date)
        const start = new Date(date)
        start.setHours(0, 0, 0, 0)
        const end = new Date(date)
        end.setHours(23, 59, 59, 999)
        const find = await this.repo.find({
            where: {
                date: Between(start, end)
            }, relations: ["category", "book"]
        })
        return find
    }

}