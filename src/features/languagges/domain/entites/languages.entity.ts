import { CourseEntity } from "../../../courses/domain/entites/course.entity";
import { BookEntity } from "../../../books/domain/entites/book.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("languages")
export class Languages extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:32,unique:true})
    title!:string
    @Column({type:"varchar",length:32,unique:true})
    code!:string
    @OneToMany(()=>CourseEntity,course =>course.languages)
    course:CourseEntity[]
    @OneToMany(() => BookEntity, book => book.language)
    books: BookEntity[]
}
