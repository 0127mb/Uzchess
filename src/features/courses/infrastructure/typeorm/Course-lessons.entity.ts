import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";
import { CourseSection } from "./course-section.entity";
import { UsersLessons } from "./users-lessons.entity";

@Entity("CourseLessons")
export class CourseLessonsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => CourseEntity, course => course.courseLessons)
    course: CourseEntity
    @ManyToMany(() => CourseSection, section => section.lessons)
    sections: CourseSection[]
    @Column({ type: "varchar", length: 128 })
    title: string
    @Column({ type: "text", nullable: true })
    content?: string
    @Column({ type: "varchar", length: 128, nullable: true })
    thumbnail?: string
    @Column({ type: "varchar", length: 128 })
    video!: string   
    @Column({type:"int",nullable:true})
    order:number
    @CreateDateColumn({type:"timestamp"})
    date:Date
    @Column({type:"boolean",default:false})
    isfree:boolean
    @OneToMany(() => UsersLessons, ul => ul.lesson)
    usersLessons: UsersLessons[]
}
