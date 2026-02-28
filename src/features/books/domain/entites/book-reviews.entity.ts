import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { BookEntity } from "./book.entity";

@Entity("BookReviews")
export class BookReviewsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.bookReviews)
    user: User;

    @ManyToOne(() => BookEntity, book => book.reviews)
    book: BookEntity;

    @Column({ type: "int" })
    rating: number;

    @Column({ type: "varchar", length: 512, nullable: true })
    comment?: string;

    @CreateDateColumn()
    date: Date;
}
