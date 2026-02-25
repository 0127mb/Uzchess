import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseSection } from "./course-section.entity";
import { CourseLessonsEntity } from "../../Course-lessons.entity";
@Entity("courses")

export class CourseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @OneToMany(() => CourseSection,section =>section.course)
    CourseSection:CourseSection[]
     @OneToMany(() => CourseLessonsEntity,lesson =>lesson.course)
    courseLessons:CourseLessonsEntity[]
    @Column({ type: "varchar", length: 128 })
    title!: string
    @Column({ type: "varchar", length: 128, nullable: true })
    image?: string
    @Column({ type: "decimal", precision: 10, scale: 2 })
    price!: number
    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    newPrice?: number
    @Column({ type: "number", default: 0 })
    reviewsCount!: number
    @Column({ type: "decimal", precision: 2, scale: 1 })
    rating!: number
    @Column({ type: "number", default: 0 })
    SectionsCount!: number
    @Column({type: "number",default: 0})
    studentsCount: number

}
