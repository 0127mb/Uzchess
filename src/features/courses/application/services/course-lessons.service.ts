import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseLessonsEntity } from "../../domain/entites/Course-lessons.entity";
import { Repository } from "typeorm";
import { CourseLessonsdto } from "../dto/course-lessons.dto";

@Injectable()
export class CourseLessonsService {
    constructor(@InjectRepository(CourseLessonsEntity)
    private lessonsRepo: Repository<CourseLessonsEntity>) { }
    async createLesson(dto: CourseLessonsdto, file: Express.Multer.File): Promise<CourseLessonsEntity> {
        if (!file) {
            throw new BadRequestException("video must be upload")
        }
        const lessons = this.lessonsRepo.create({ ...dto, video: file.filename })
        await this.lessonsRepo.save(lessons)
        return lessons
    }
    async getCourseLessons(query?: CourseLessonsdto): Promise<CourseLessonsEntity[]> {
        const qb = this.lessonsRepo.createQueryBuilder("Lesson")
        if (query.date) {
            qb.andWhere("lesson.date =  :date", { date: query.date })
        }
        if (query?.isfree !== undefined) {
            qb.andWhere("lesson.isfree = : isfree", { isfree: query.isfree })
        }
        if (query.title) {
            qb.andWhere("lesson.title LIke :title", { title: `%${query.title}` })
        }
        if (query.thumbnail) {
            qb.andWhere("lesson.thumbnail Like :thumbnail", { thumbnail: `%${query.thumbnail}` })
        }
        if (query.order) {
            qb.andWhere("lesson.order = :order",{ order: query.order })
        }
        return qb.getMany()
    }
}
