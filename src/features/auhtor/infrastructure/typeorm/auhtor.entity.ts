import { CourseEntity } from "src/features/courses/infrastructure/typeorm/Course.entity";
import { BookEntity } from "src/features/books/domain/entites/book.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Auhtors")
export class Auhtors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:64})
    fullName:string
    @ManyToMany(()=>CourseEntity,course => course.author)
    course:CourseEntity
    @OneToMany(() => BookEntity, book => book.author)
    books: BookEntity[]
}
