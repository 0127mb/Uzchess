import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../user/domain/entites/User.entity";
import { BookEntity } from "./book.entity";

@Entity("BookLikes")
export class BookLikesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userId: number;

    @Column()
    bookId: number;

    @ManyToOne(() => User, user => user.bookLikes)
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => BookEntity, book => book.likes)
    @JoinColumn({ name: "bookId" })
    book: BookEntity;

    @CreateDateColumn()
    date: Date;
}
