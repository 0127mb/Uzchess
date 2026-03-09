import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseEntity } from "../../domain/entites/Course.entity";
import { Repository } from "typeorm";
import { CourseDto } from "../dto/course.dto";
import { UpdateCourseDto } from "../dto/update-course.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(CourseEntity)
        private courseRepo: Repository<CourseEntity>
    ) { }

    async createCourse(dto: CourseDto): Promise<CourseEntity> {
        try {

            const course = this.courseRepo.create(dto)
            await this.courseRepo.save(course)
            return course;
        } catch (error) {
            console.error("Error creating course:", error);
            throw new InternalServerErrorException("Failed to create course");
        }
    }

    async getAllCourses(): Promise<CourseEntity[]> {
        try {
            return await this.courseRepo.find()
        } catch (error) {
            console.error("Error fetching courses:", error);
            throw new InternalServerErrorException("Failed to fetch courses");
        }
    }

    async getCourseById(id: number): Promise<CourseEntity> {
        try {
            const course = await this.courseRepo.findOne({
                where: { id },
                relations: ["author", "category", "languages", "difficulty", "CourseSection", "courseLessons"]
            });

            if (!course) {
                throw new NotFoundException(`Course with ID ${id} not found`);
            }

            return course;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            console.error("Error fetching course:", error);
            throw new InternalServerErrorException("Failed to fetch course");
        }
    }

    async updateCourse(id: number, dto: UpdateCourseDto): Promise<CourseEntity> {
        try {
            const course = await this.getCourseById(id);
            return await this.courseRepo.save(course);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            console.error("Error updating course:", error);
            throw new InternalServerErrorException("Failed to update course");
        }
    }

    async deleteCourse(id: number): Promise<{ message: string }> {
        try {
            const course = await this.getCourseById(id);
            await this.courseRepo.remove(course);
            return { message: `Course with ID ${id} deleted successfully` };
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            console.error("Error deleting course:", error);
            throw new InternalServerErrorException("Failed to delete course");
        }
    }
}
