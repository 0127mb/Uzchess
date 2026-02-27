import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";

@Entity("CategoryCourse")
export class CategoryCourse extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:128})
    title:string
    @OneToMany(()=>CourseEntity,course => course.category)
    course:CourseEntity[]

}