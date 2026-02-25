import { Otptype } from "src/features/auth/domain/enums/Otptype.enum";
import { User } from "src/features/user/infrastructure/typeorm/User.entity";
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
    @Column({ type: "enum" })
    type: Otptype

}