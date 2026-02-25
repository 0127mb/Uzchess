import { Logintype } from "src/constants/enum/Logintype.enum";
import { OtpCodes } from "src/features/auth/infrastructure/persistence/typeorm/otp-code.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("Users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 64 })
    fullName!: string
    @Column({ type: "varchar", length: 128, nullable: true })
    profileImage?: string
    @Column({ type: "varchar", length: 64, unique: true })
    login!: string
    @OneToMany(() => OtpCodes, otp => otp.user)
    Otpcode: OtpCodes[]
    @Column({ type: "enum" })
    loginType!: Logintype
    @Column({ type: "varchar", length: 128, nullable: true })
    password?: string
    @CreateDateColumn()
    birthDate!: Date
    @Column({ type: "boolean", default: false })
    isVerified!: boolean
    @Column({ type: "boolean", default: false })
    isActive!: boolean
}