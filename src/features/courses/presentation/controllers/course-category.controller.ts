import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CourseCategoryService } from "../../application/services/course-category.service";
import { ApiConsumes } from "@nestjs/swagger";
import { CourseCategoryDto } from "../../application/dto/course-category.dto";
import { CategoryCourse } from "../../domain/entites/Category-course.entity";

@Controller("CourseCategory")
export class CourseCategoryController {
    constructor(private readonly categoryService: CourseCategoryService) { }
    @Post('post')
    @ApiConsumes("application/json")
    async createCategory(@Body() dto: CourseCategoryDto): Promise<CategoryCourse> {
        const category = this.categoryService.createCategory(dto)
        return category
    }

    @Get(":id")
    async getCategory(@Param('id', ParseIntPipe) id: number): Promise<CategoryCourse> {
        return await this.categoryService.getCategory(id)
    }

}