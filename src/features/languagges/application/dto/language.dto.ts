import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"

export class languageDto {
    @ApiProperty({
        type: "string",
        example: "string should be unqiue",
        description: "string"
    })
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    code: string
    @IsNotEmpty()
    @ApiProperty({
        type: "string",
        example: "string should be unique think before send request my friend",
        description: "string"
    })
    @IsString()
    @Type(() => String)
    title: string
}