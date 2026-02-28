import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CourseEntity } from "src/features/courses/infrastructure/typeorm/Course.entity";
import { BookEntity } from "src/features/books/domain/entites/book.entity";

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
