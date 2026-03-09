import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CourseEntity } from "../../../courses/domain/entites/Course.entity";
import { BookEntity } from "../../../books/domain/entites/book.entity";

@Entity("Difficulty")
export class Difficulty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 128 })
    icon: string
    @Column({ type: "varchar", length: 128 })
    title: string
    @OneToMany(() => CourseEntity, course => course.difficulty)
    CourseEntity: CourseEntity[]
    @OneToMany(() => BookEntity, book => book.difficulty)
    books: BookEntity[]
}
