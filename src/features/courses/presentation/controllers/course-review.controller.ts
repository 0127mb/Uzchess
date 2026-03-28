import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CourseReviewService } from "../../application/services/course-review.service";
import { CourseReviews } from "../../domain/entites/course.review.entity";
import { CourseReviewDto } from "../../application/dto/course-review.dto";


@ApiTags("CourseReview")
@Controller("CourseReview")

export class CourseReviewController {
  
    constructor(private readonly reviewServie: CourseReviewService) { }
    @Post()
    async createReview(@Body() dto: CourseReviewDto): Promise<CourseReviews> {
        const review = this.reviewServie.createReviews(dto)
        return review
    }
    @Get()
    async getReviews(@Query() query:CourseReviewDto):Promise<CourseReviews[]>{
        return await this.reviewServie.getReviews(query)
    }
}