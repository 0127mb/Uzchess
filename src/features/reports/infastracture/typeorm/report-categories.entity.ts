import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReportsEntity } from "./reports.entity";

@Entity("ReportCategories")
export class ReportCategoriesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 64, unique: true })
    title: string;

    @Column({ type: "int", nullable: true })
    order?: number;

    @OneToMany(() => ReportsEntity, report => report.category)
    reports: ReportsEntity[];
}
