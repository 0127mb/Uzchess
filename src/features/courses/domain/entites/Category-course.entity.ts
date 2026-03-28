import {  Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./course.entity";

@Entity("CategoryCourse")
export class CategoryCourse{
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:128})
    title!:string
    @OneToMany(()=>CourseEntity,course => course.category)
    course:CourseEntity[]

}