import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"


export class DifficultyDto {
    @ApiProperty({
        example: "icon",
        description: "icon should be jpg png svg format",
        format: "binary"
    })
    @IsString()
    @IsNotEmpty()
    icon: any
    @ApiProperty({
        example: "title of difficulties",
        description: "title",

    })
    @IsString()
    @IsNotEmpty()
    title: string


}