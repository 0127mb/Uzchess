import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";

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