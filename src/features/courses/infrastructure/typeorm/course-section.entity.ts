import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";
import { Timestamp } from "typeorm/browser";

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

}