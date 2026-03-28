import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "../../application/dto/signIn.dto";
import { AuthenticationService } from "../../service/Authentication.service";

@Controller("auth")
export class AuthenticationController {
    constructor(private readonly authSerivce: AuthenticationService) { }
    @Post("sign-in")
    async sigIn(@Body() payload: SignInDto) {
        return await this.authSerivce.signIn(payload)
    }
    @Post("sign-up")
    async signUp(@Body() payload:SignInDto){
        return await  this.authSerivce.signUp(payload)

    }
}