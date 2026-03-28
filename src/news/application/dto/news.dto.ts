import { UploadedFile } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class NewsDto {
    @ApiProperty({
        type: "string",
    })
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    title!: string;
    @ApiProperty({
        type: "string",
    })
    @ApiProperty({
        format: "binary",
        type: "string"
    })
    @IsNotEmpty()
    @IsString()
    image!: string;
    @ApiProperty({
        format: "string",
        type: "string"
    })
    @Type(() => Text)
    @IsNotEmpty()
    @IsString()
    content!: string;
    @ApiProperty({
        example:"12.09.7012",
    })
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    date:Date
}