import { Injectable } from "@nestjs/common";
import { User } from "../../user/domain/entites/User.entity";
import { Otptype } from "../domain/enums/Otptype.enum";
import { OtpCodes } from "../domain/entites/otp-code.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()

export class OtpCodeService {
    constructor(@InjectRepository(OtpCodes) private repo: Repository<OtpCodes>) { }
    async sendOtp(user: User, type: Otptype) {
        let otpCode = {
            userId: user.id,
            code: this.generateOtp(),
            type: type,
            Date: Date
        }
        const create = this.repo.create(otpCode)
        await this.repo.save(create)

    }
    private generateOtp(): string {
        return Math.floor(Math.random() * 1000000).toString(10)
    }
}