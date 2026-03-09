import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../user/infrastructure/typeorm/User.entity";
import { BookEntity } from "./book.entity";

@Entity("BookReviews")
export class BookReviewsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number
    @Column()
    bookId: number
    @ManyToOne(() => User, user => user.bookReviews)
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => BookEntity, book => book.reviews)
    @JoinColumn({ name: "bookId" })
    book: BookEntity;

    @Column({ type: "int" })
    rating: number;

    @Column({ type: "varchar", length: 512, nullable: true })
    comment?: string;

    @CreateDateColumn()
    date: Date;
}
