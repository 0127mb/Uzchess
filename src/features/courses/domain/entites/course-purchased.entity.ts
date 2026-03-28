import { User } from "../../../user/domain/entites/User.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./course.entity";


@Entity("PurchasedCourses")
export class CoursesPurchased extends BaseEntity {
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