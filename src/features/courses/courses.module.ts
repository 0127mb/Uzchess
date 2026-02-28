import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseEntity } from "./infrastructure/typeorm/Course.entity";
import { CourseSection } from "./infrastructure/typeorm/course-section.entity";
import { CourseLessonsEntity } from "./infrastructure/typeorm/Course-lessons.entity";
import { PurchasedCourses } from "./infrastructure/typeorm/purchased.course.entity";
import { CourseReviews } from "./infrastructure/typeorm/Course.review.entity";
import { LikedCourse } from "./infrastructure/typeorm/Liked.course.entity";
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
        ]),
    ],
    controllers: [CourseController],
    providers: [CourseService],
    exports: [CourseService],
})
export class CoursesModule {}
