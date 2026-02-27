import { CourseEntity } from "src/features/courses/infrastructure/typeorm/Course.entity";
import { BookEntity } from "src/features/courses/infrastructure/typeorm/book.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("languages")
export class Languages extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:32})
    title:string
    @Column({type:"varchar",length:32})
    code:string
    @OneToMany(()=>CourseEntity,course =>course.languages)
    course:CourseEntity[]
    @OneToMany(() => BookEntity, book => book.language)
    books: BookEntity[]
}
