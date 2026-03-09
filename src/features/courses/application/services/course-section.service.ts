import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseSection } from "../../domain/entites/course-section.entity";
import { Repository } from "typeorm";
import { CourseSectionDto } from "../dto/course-section.dto";

@Injectable()
export class CourseSectionService {
    constructor(@InjectRepository(CourseSection)
    private sectionrepo: Repository<CourseSection>) { }
    async createSection(dto: CourseSectionDto): Promise<CourseSection> {
        const section = this.sectionrepo.create(dto)
        await this.sectionrepo.save(section)
        return section
    }
    async getSelection(query: CourseSectionDto): Promise<CourseSection[]> {
        const qb = this.sectionrepo.createQueryBuilder("section")
        if (query.courseId) {
            qb.andWhere("section.courseId = :courseId", { courseId: query.courseId })
        }
        if (query.date) {
            qb.andWhere("section.date = :date", { date: query.date })
        }
        if (query.order) {
            qb.andWhere("section.order = :order", { order: `%${query.order}` })
        }
        return qb.getMany()
    }
}