import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NewsViewsEntity } from "./news-views.entity";

@Entity("News")
export class NewsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 256 })
    title: string;

    @Column({ type: "varchar", length: 128 })
    image: string;

    @Column({ type: "text" })
    content: string;

    @CreateDateColumn()
    date: Date;

    @OneToMany(() => NewsViewsEntity, view => view.news)
    views: NewsViewsEntity[];
}
