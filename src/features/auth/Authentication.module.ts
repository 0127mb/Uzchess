import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthenticationController } from "./infrastructure/controller/Authentication.controller";
import { AuthenticationService } from "./service/Authentication.service";
import { OtpCodeService } from "./service/OtpCode.service";
import { OtpCodes } from "./domain/entites/otp-code.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([OtpCodes]),
        JwtModule.register({
            global:true,
            secret:process.env.SECRET_key,
            signOptions:{
                expiresIn:"3h"
            }
        })
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, OtpCodeService],
    exports: [AuthenticationService, OtpCodeService]
})
export class AuthenticationModule {}
