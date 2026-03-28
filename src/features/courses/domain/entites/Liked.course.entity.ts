import { User } from "../../../user/domain/entites/User.entity"; 
import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./course.entity";

@Entity("LikedCourses")
export class LikedCourse extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, user => user.Liked)
    user: User
    @ManyToOne(() => CourseEntity, course => course.liked)
    course: CourseEntity
    @CreateDateColumn({ type: "timestamp" })
    date: Date
}