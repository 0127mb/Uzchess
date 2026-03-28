import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CoursePurchasedService } from "../../application/services/course-purchased.service";
import { CoursePurchasedDto } from "../../application/dto/course-purchased.dto";
import { CoursesPurchased } from "../../domain/entites/course-purchased.entity";

@Controller("purchasedCourse")
export class CoursePurchasedController {
    constructor(private readonly service: CoursePurchasedService) { }
    @Post()
    async createPurchase(@Body() dto: CoursePurchasedDto): Promise<CoursesPurchased> {
        const purchase = this.service.createpurchase(dto)
        return purchase
    }
    @Get()
    async getCoursePurchase(@Query() query: CoursePurchasedDto): Promise<CoursesPurchased[]> {
        return await this.service.getPurchasedCourse(query)
    }
}