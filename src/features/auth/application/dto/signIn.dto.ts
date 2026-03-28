import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { Logintype } from "../../../../constants/enum/Logintype.enum"

export class SignInDto {
    @ApiProperty({
        example: "new user",
        description: "User login"
    })
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    login!: string
    @IsString()
    @MaxLength(32)
    password!: string
    @IsEnum(Logintype)
    logintype: Logintype
}