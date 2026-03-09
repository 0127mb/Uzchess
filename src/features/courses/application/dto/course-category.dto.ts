import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer"

export class CourseCategoryDto {
    @ApiProperty({
        example: "title of course category",
        description: "title",
        format: "string"
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    title: string
}