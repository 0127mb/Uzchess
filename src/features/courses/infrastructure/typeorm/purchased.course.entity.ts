import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";


@Entity("PurchasedCourses")
export class PurchasedCourses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, user => user.purchasedcourses)
    user: User
    @ManyToOne(() => CourseEntity, course => course.purchasedcourses)
    course: CourseEntity
    @Column({ type: "boolean", default: false })
    isCompleted: boolean
    @Column({ type: "timestamp" })
    date: Date

}