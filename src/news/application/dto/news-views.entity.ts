import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty } from "class-validator";
import { User } from "../../../features/user/domain/entites/User.entity";
import { NewsEntity } from "../../domain/entites/news.entity";
import { ApiProperty } from "@nestjs/swagger";

export class NewsViewsDto {
    @ApiProperty({
        type: "number",
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    userId: number;
    @ApiProperty({
        type: "number",
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    newsId: number;
    @ApiProperty({
        type: "string",
        example: "12.09.2026"
    })
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    firstDate: Date;
    @ApiProperty({
        type: "string",
        example: "12.09.2026"
    })
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    lastDate!: Date;
    @ApiProperty({
        type: "number",
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    count!: number;
}