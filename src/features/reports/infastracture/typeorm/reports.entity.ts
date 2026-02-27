import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReportCategoriesEntity } from "./report-categories.entity";
import { ReportType } from "src/constants/enum/ReportType.enum";

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

    @CreateDateColumn()
    date: Date;
}
