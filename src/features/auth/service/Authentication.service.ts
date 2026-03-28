import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../../user/domain/entites/User.entity";
import argon2 from "argon2";
import { SignInDto } from "../application/dto/signIn.dto";
import { OtpCodeService } from "./OtpCode.service";
import { Otptype } from "../domain/enums/Otptype.enum";
@Injectable()
export class AuthenticationService {
    constructor(private readonly jwtService: JwtService,
        private readonly otpCodesService:OtpCodeService
    ) { }
    async signUp(payload: SignInDto) {
        let user = await User.countBy({
            login: payload.login
        })
        if (user) {
            throw new BadRequestException("User with given login already exists")
        }
        let newUser = User.create(payload)
        await User.save(newUser)
        await  this.otpCodesService.sendOtp(newUser,Otptype.register)

    }
    async signIn({ login, password }: SignInDto) {
        let user = await User.findOneBy({ login })
        if (!user || user.password) {
            throw UnauthorizedException
        }
        if (user.isActive || user.isVerified) {
            throw UnauthorizedException
        }
        const secretkey = process.env.SECRET_KEY
        if (!secretkey) {
            throw new InternalServerErrorException
        }
        let passwordMatch = await argon2.verify(user.password, password + process.env.SECRET_KEY)
        if (!passwordMatch) {
            throw new UnauthorizedException
        }
        let payload = { id: user.id, login: user.login }
        let accessToken = this.jwtService.sign(payload)

        return { accessToken: accessToken }
    }
    async VerfiyUser(){}
}