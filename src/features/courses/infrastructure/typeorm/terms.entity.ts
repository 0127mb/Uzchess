import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Terms")
export class TermsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    content: string;
}
