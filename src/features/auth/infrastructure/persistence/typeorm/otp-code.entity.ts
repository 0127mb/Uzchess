import { Otptype } from "../../../domain/enums/Otptype.enum"; 
import { User } from "../../../../user/infrastructure/typeorm/User.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("OtpCodes")
export class OtpCodes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, user => user.Otpcode)
    user: User
    @Column({ type: "varchar", length: 6 })
    code: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
    @Column({ type: "enum",enum:Otptype })
    type: Otptype

}