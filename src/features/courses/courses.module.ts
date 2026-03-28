import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryCourse } from "./domain/entites/Category-course.entity";
import { LikedCourse } from "./domain/entites/Liked.course.entity";
import { CourseReviews } from "./domain/entites/course.review.entity";
import { CoursesPurchased } from "./domain/entites/course-purchased.entity";
import { CourseLessonsEntity } from "./domain/entites/Course-lessons.entity";
import { CourseSection } from "./domain/entites/course-section.entity";
import { CourseEntity } from "./domain/entites/course.entity";
import { CourseController } from "./presentation/controllers/course.controller";
import { CourseSectionController } from "./presentation/controllers/course-section.controller";
import { CourseLessonController } from "./presentation/controllers/course-lesson.controller";
import { CoursePurchasedController } from "./presentation/controllers/course.purchased.controller";
import { CourseReviewController } from "./presentation/controllers/course-review.controller";
import { LikedCourseController } from "./presentation/controllers/liked.course.contrroller";
import { CourseCategoryController } from "./presentation/controllers/course-category.controller";
import { CourseService } from "./application/services/course.service";
import { CourseSectionService } from "./application/services/course-section.service";
import { CourseLessonsService } from "./application/services/course-lessons.service";
import { CoursePurchasedService } from "./application/services/course-purchased.service";
import { CourseReviewService } from "./application/services/course-review.service";
import { LikedCourseService } from "./application/services/liked-course.service";
import { CourseCategoryService } from "./application/services/course-category.service";



@Module({
    imports: [
        TypeOrmModule.forFeature([
            CourseEntity,
            CourseSection,
            CourseLessonsEntity,
            CoursesPurchased,
            CourseReviews,
            LikedCourse,
            CategoryCourse,
        ]),
    ],
    controllers: [CourseController, CourseSectionController, CourseLessonController, CoursePurchasedController, CourseReviewController, LikedCourseController, CourseCategoryController],
    providers: [CourseService, CourseSectionService, CourseLessonsService, CoursePurchasedService, CourseReviewService, LikedCourseService, CourseCategoryService],
    exports: [CourseService, CourseSectionService, CourseLessonsService, CoursePurchasedService, CourseReviewService, LikedCourseService, CourseCategoryService],
})
export class CoursesModule { }
