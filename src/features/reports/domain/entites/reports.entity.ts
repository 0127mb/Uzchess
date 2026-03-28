import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReportCategoriesEntity } from "./report-categories.entity";
import { ReportType } from "../../../../constants/enum/ReportType.enum";
import { BookEntity } from "../../../books/domain/entites/book.entity";

@Entity("Reports")
export class ReportsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ReportCategoriesEntity, category => category.reports)
    category: ReportCategoriesEntity;

    @Column({ type: "enum", enum: ReportType })
    target: ReportType;

    @Column({ type: "int" })
    targetId: number;

    @Column({ type: "varchar", length: 256, nullable: true })
    description?: string;

    @CreateDateColumn({type:"timestamp"})
    date: Date;
    @OneToMany(()=>BookEntity, book => book.report)
    @JoinColumn({name: 'targetId'})
    book:BookEntity
}
