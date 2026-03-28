import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class authorDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    fullName: string
}