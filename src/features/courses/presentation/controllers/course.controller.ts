import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { CourseService } from "../../application/services/course.service";
import { CreateCourseDto } from "../../application/dto/create-course.dto";
import { UpdateCourseDto } from "../../application/dto/update-course.dto";
import { CourseEntity } from "../../infrastructure/typeorm/Course.entity";

@ApiTags("Courses")
@Controller("courses")
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: "Create a new course" })
    @ApiResponse({ status: 201, description: "Course created successfully" })
    @ApiResponse({ status: 400, description: "Bad request" })
    async createCourse(@Body() dto: CreateCourseDto): Promise<CourseEntity> {
        return await this.courseService.createCourse(dto);
    }

    @Get()
    @ApiOperation({ summary: "Get all courses" })
    @ApiResponse({ status: 200, description: "List of all courses" })
    async getAllCourses(): Promise<CourseEntity[]> {
        return await this.courseService.getAllCourses();
    }

    @Get(":id")
    @ApiOperation({ summary: "Get course by ID" })
    @ApiParam({ name: "id", type: "number", description: "Course ID" })
    @ApiResponse({ status: 200, description: "Course found" })
    @ApiResponse({ status: 404, description: "Course not found" })
    async getCourseById(@Param("id") id: number): Promise<CourseEntity> {
        return await this.courseService.getCourseById(id);
    }

    @Put(":id")
    @ApiOperation({ summary: "Update course by ID" })
    @ApiParam({ name: "id", type: "number", description: "Course ID" })
    @ApiResponse({ status: 200, description: "Course updated successfully" })
    @ApiResponse({ status: 404, description: "Course not found" })
    async updateCourse(@Param("id") id: number, @Body() dto: UpdateCourseDto): Promise<CourseEntity> {
        return await this.courseService.updateCourse(id, dto);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Delete course by ID" })
    @ApiParam({ name: "id", type: "number", description: "Course ID" })
    @ApiResponse({ status: 200, description: "Course deleted successfully" })
    @ApiResponse({ status: 404, description: "Course not found" })
    async deleteCourse(@Param("id") id: number): Promise<{ message: string }> {
        return await this.courseService.deleteCourse(id);
    }
}