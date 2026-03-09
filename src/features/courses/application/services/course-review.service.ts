import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseReviews } from "../../domain/entites/Course.review.entity";
import { Repository } from "typeorm";
import { CourseReviewDto } from "../dto/course-review.dto";

@Injectable()
export class CourseReviewService {
    constructor(@InjectRepository(CourseReviews)
    private reviewRepo: Repository<CourseReviews>) { }
    async createReviews(dto: CourseReviewDto): Promise<CourseReviews> {
        const reviews = this.reviewRepo.create(dto)
        await this.reviewRepo.save(reviews)
        return reviews
    }
    async getReviews(query?: CourseReviewDto): Promise<CourseReviews[]> {
        const qb = this.reviewRepo.createQueryBuilder("reviews")
        if (query.comment) {
            qb.andWhere("reviews.comment = :coment", { coment: `%${query.comment}` })
        }
        if (query.courseId) {
            qb.andWhere("reviews.courseId = courseId", { courseiD: query.courseId })
        }
        if (query.rating) {
            qb.andWhere("reviews.rating = :rating", { rating: query.rating })
        }
        if (query.userId) {
            qb.andWhere("reviews.userId Like :userId", { userId: `%${query.userId}` })
        }
        return qb.getMany()
    }
}