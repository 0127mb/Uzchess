import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class ReportsCategoryDto {
    @ApiProperty({
        type: "string",
        example: "the wibsite shares illigal books and photos taken from darknet",
        description: "title"
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    @MaxLength(64)
    title: string;
    @ApiProperty({
        type: "number",
        example: 3,
        description: "order id"
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    order?: number;
}