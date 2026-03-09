import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LikedCourse } from "../../domain/entites/Liked.course.entity";
import { Repository } from "typeorm";
import { LikedCourseDto } from "../dto/liked-course.dto";

@Injectable()
export class LikedCourseService {
    constructor(@InjectRepository(LikedCourse) private likerepo: Repository<LikedCourse>) { }
    async createLike(dto: LikedCourseDto): Promise<LikedCourse> {
        const like = this.likerepo.create()
        await this.likerepo.save(like)
        return like
    }
    async getLikes(query: LikedCourseDto): Promise<LikedCourse[]> {
        const qb = this.likerepo.createQueryBuilder("likes")
        if (query.courseId) {
            qb.andWhere("likes.courseId = :courseId", { courseID: query.courseId })

        }
        if (query.userId) {
            qb.andWhere("likes.userId = :usereId", { userId: query.userId })
        }
        return qb.getMany()
    }
}