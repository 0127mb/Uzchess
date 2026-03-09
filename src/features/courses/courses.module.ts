import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseEntity } from "./domain/entites/Course.entity"; 
import { CourseSection } from "./domain/entites/course-section.entity";
import { CourseLessonsEntity } from "./domain/entites/Course-lessons.entity"; 
import { PurchasedCourses } from "./domain/entites/purchased.course.entity";
import { CourseReviews } from "./domain/entites/Course.review.entity"; 
import { LikedCourse } from "./domain/entites/Liked.course.entity"; 
import { CategoryCourse } from "./domain/entites/Category-course.entity";
import { CourseService } from "./application/services/course.service";
import { CourseController } from "./presentation/controllers/course.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CourseEntity,
            CourseSection,
            CourseLessonsEntity,
            PurchasedCourses,
            CourseReviews,
            LikedCourse,
            CategoryCourse,
        ]),
    ],
    controllers: [CourseController],
    providers: [CourseService],
    exports: [CourseService],
})
export class CoursesModule {}
