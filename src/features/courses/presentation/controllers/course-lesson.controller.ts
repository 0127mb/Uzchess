import { Body, Controller, HttpCode, HttpStatus, Post, UseInterceptors, UploadedFiles, Query, Get } from "@nestjs/common";
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CourseLessonsService } from "../../application/services/course-lessons.service";
import { CourseLessonsdto } from "../../application/dto/course-lessons.dto";
import { CourseLessonsEntity } from "../../domain/entites/Course-lessons.entity";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@ApiTags("CourseLesson")
@Controller()
export class CourseLessonController {
    constructor(private readonly lessonService: CourseLessonsService) { }


    @UseInterceptors(
        FilesInterceptor(
            "file",
            5,
            {
                storage: diskStorage({
                    destination: "./uploads/courses",
                    filename: (req, file, cb) => {
                        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                        cb(null, uniqueSuffix + "-" + file.originalname);
                    },
                }),
            }
        )
    )
    @ApiConsumes("multipart/form-data")
    @Post("create")
    async createLesson(
        @Body() dto: CourseLessonsdto,
        @UploadedFiles() files: Express.Multer.File
    ): Promise<CourseLessonsEntity> {
        const lesson = await this.lessonService.createLesson(dto, files);
        return lesson;
    }
    @Get()
    async getAllLessons(@Query() query: CourseLessonsdto) {
        return await this.lessonService.getCourseLessons(query)
    }

}