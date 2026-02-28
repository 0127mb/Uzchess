import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Auhtors } from "src/features/auhtor/infrastructure/typeorm/auhtor.entity";
import { BookCategoryEntity } from "./book-category.entity";
import { Languages } from "src/features/languagges/infrastracture/typeorm/languages.entity";
import { Difficulty } from "src/features/difficulty/infrastracture/typeorm/difficulty.entity";
import { BookReviewsEntity } from "./book-reviews.entity";
import { BookLikesEntity } from "./book-likes.entity"; 

@Entity("Books")
export class BookEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Auhtors, author => author.books)
    author: Auhtors;

    @ManyToOne(() => BookCategoryEntity, category => category.books)
    category: BookCategoryEntity;

    @ManyToOne(() => Languages, language => language.books)
    language: Languages;

    @ManyToOne(() => Difficulty, difficulty => difficulty.books)
    difficulty: Difficulty;

    @Column({ type: "varchar", length: 128 })
    title: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "varchar", length: 128, nullable: true })
    image?: string;

    @Column({ type: "decimal", precision: 12, scale: 2 })
    price: number;

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
    newPrice?: number;

    @Column({ type: "decimal", precision: 2, scale: 1, nullable: true })
    rating?: number;

    @Column({ type: "int", default: 0 })
    reviewsCount: number;

    @Column({ type: "int" })
    pages: number;

    @Column({ type: "date" })
    pubDate: Date;

    @OneToMany(() => BookReviewsEntity, (review: any) => review.book)
    reviews: BookReviewsEntity[];

    @OneToMany(() => BookLikesEntity, (like: any) => like.book)
    likes: BookLikesEntity[];

    @CreateDateColumn()
    createdAt: Date;
}
