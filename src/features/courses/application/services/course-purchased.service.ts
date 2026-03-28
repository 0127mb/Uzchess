import { Injectable, Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CoursesPurchased } from "../../domain/entites/course-purchased.entity";
import { Repository } from "typeorm";
import { CoursePurchasedDto } from "../dto/course-purchased.dto";

@Injectable()
export class CoursePurchasedService {
    constructor(@InjectRepository(CoursesPurchased)
    private purchaseRepo: Repository<CoursesPurchased>

    ) { }
    async createpurchase(dto: CoursePurchasedDto): Promise<CoursesPurchased> {
        const purchase = this.purchaseRepo.create(dto)
        await this.purchaseRepo.save(purchase)
        return purchase
    }
    async getPurchasedCourse(query?: CoursePurchasedDto): Promise<CoursesPurchased[]> {
        const qb = this.purchaseRepo.createQueryBuilder("Purchase")
        if (query.course) {
            qb.andWhere("Purchase.course = :course", { course: `%${query.course}` })
        }
        if (query.date) {
            qb.andWhere("Purchase.date = :date", { date: `%${query.date}` })
        } if (query.isCompleted) {
            qb.andWhere("Purchase.isCompleted = :isCompleted", { isCompleted: `%${query.isCompleted}` })
        } if (query.user) {
            qb.andWhere("Purchase.user = :user", { user: `%${query.user}` })
        }
        return qb.getMany()
    }
}