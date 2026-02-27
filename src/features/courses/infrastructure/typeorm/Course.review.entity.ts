import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./Course.entity";

@Entity("CourseReviews")
export class CourseReviews extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @ManyToOne(() =>User,user => user.reviews)
    user!:User
    @ManyToOne(() =>CourseEntity,course =>course.reviews)
    course!:CourseEntity
    @Column({type:"int"})
    rating!:number
    @Column({type:"varchar",length:512,nullable:true})
    comment?:string
    @CreateDateColumn({type:"timestamp"})
    date!:Date
}