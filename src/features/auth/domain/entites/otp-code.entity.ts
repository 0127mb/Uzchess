import { Otptype } from "../enums/Otptype.enum"; 
import { User } from "../../../user/domain/entites/User.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("OtpCodes")
export class OtpCodes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, user => user.Otpcode)
    @JoinColumn({name:"userId"})
    user: User
    @Column({ type: "varchar", length: 6 })
    code: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
    @Column({ type: "enum",enum:Otptype })
    type: Otptype
    @Column()
    userId:number
    @CreateDateColumn()
    date:Date

}