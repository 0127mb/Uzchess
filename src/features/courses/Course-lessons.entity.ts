import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./infrastructure/typeorm/Course.entity";

@Entity("CourseLessons")
export class CourseLessonsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => CourseEntity, course => course.courseLessons)
    course: CourseEntity

}