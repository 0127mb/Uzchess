import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity("BookCategories")
export class BookCategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 64, unique: true })
    title!: string;
    @OneToMany(() => BookEntity, book => book.category)
    books: BookEntity[];
}
