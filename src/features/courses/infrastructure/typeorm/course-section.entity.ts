import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";
import { Timestamp } from "typeorm/browser";
import { CourseLessonsEntity } from "./Course-lessons.entity";

@Entity("CourseSections")
export class CourseSection extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => CourseEntity, course => course.CourseSection)
    course: CourseEntity

    @Column({ type: "varchar", length: 128 })
    title: string
    @Column({ type: "int", nullable: true })
    order?: number
    @CreateDateColumn({ type: "timestamp" })
    date: Timestamp
@ManyToMany(()=>CourseLessonsEntity,lessons => lessons.sections)
lessons:CourseLessonsEntity
}