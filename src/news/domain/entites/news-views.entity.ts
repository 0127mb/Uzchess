import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "src/features/user/infrastructure/typeorm/User.entity";
import { NewsEntity } from "./news.entity";

@Entity("NewsViews")
export class NewsViewsEntity extends BaseEntity {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    newsId: number;

    @ManyToOne(() => User, user => user.newsViews)
    user: User;

    @ManyToOne(() => NewsEntity, news => news.views)
    news: NewsEntity;

    @CreateDateColumn()
    firstDate: Date;

    @UpdateDateColumn()
    lastDate: Date;

    @Column({ type: "int", default: 1 })
    count: number;
}
