import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CourseSectionService } from "../../application/services/course-section.service";
import { CourseSectionDto } from "../../application/dto/course-section.dto";
import { CourseSection } from "../../domain/entites/course-section.entity";
@ApiTags("CourseSection")
@Controller("CourseSection")
export class CourseSectionController {
    constructor(private readonly sectionService: CourseSectionService) { }
    @Post("post")
    async createSection(@Body() dto: CourseSectionDto): Promise<CourseSection> {
        const review = this.sectionService.createSection(dto)
        return review
    }
    @Get("get")
    async getCourseSection(@Query() query: CourseSectionDto): Promise<CourseSection[]> {
        return await this.sectionService.getSelection(query)
    }
}