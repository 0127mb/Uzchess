import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../../features/user/domain/entites/User.entity";
import { NewsEntity } from "./news.entity";

@Entity("NewsViews")
export class NewsViewsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  userId: number;

  @Column()
  newsId: number;

  @ManyToOne(() => User, user => user.newsViews)
  @JoinColumn({
    name: "userId"
  })
  user: User;

  @ManyToOne(() => NewsEntity, news => news.views)
  @JoinColumn({
    name: "newsId"
  })
  news: NewsEntity;

  @CreateDateColumn({ type: "timestamp" })
  firstDate: Date;

  @UpdateDateColumn({ type: "timestamp" })
  lastDate!: Date;

  @Column({ type: "int", default: 1 })
  count!: number;
}
