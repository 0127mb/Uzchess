import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { CourseLessonsEntity } from "../../../courses/infrastructure/typeorm/Course-lessons.entity";

@Entity("users_lessons")
export class UsersLessons {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    courseLessonId: number;

    @ManyToOne(() => User, user => user.usersLessons)
    user: User;

    @ManyToOne(() => CourseLessonsEntity, lesson => lesson.usersLessons)
    lesson: CourseLessonsEntity;

    @Column({ type: "int", nullable: true })
    stoppedAt?: number;

    @Column({ type: "boolean", default: false })
    isCompleted: boolean;
}
