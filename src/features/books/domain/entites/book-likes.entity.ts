import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { BookEntity } from "./book.entity";

@Entity("BookLikes")
export class BookLikesEntity extends BaseEntity {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    bookId: number;

    @ManyToOne(() => User, user => user.bookLikes)
    user: User;

    @ManyToOne(() => BookEntity, book => book.likes)
    book: BookEntity;

    @CreateDateColumn()
    date: Date;
}
