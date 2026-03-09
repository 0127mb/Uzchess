
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CourseLessonsdto {
    @ApiProperty({
        example: "title of course lessons",
        description: "course lessons title",
        format: "string"
    })
    @IsNotEmpty()
    @IsString()
    title: string

    @ApiPropertyOptional({
        example: "course lesson about of the topic",
        description: "course lessons about"
    })
    @IsString()
    @IsOptional()
    content?: string
    @ApiPropertyOptional({
        example: "preview of course lessons",
        description: "thumbnail of course course lesson"
    })
    @IsString()
    @IsOptional()
    thumbnail?: string
    @ApiProperty({
        example: "video.mp4",
        description: "video",
        format: "binary"
    })
    @IsNotEmpty()
    @IsString()
    video!: string
    @ApiPropertyOptional({
        example: 1,
        description: "ordered courses",
        format: "number"
    })
    @IsInt()
    @IsOptional()
    order: number
    @ApiProperty({
        example: "12.03.3020",
        description: "date of course lessons",
        format: "date"
    })
    @IsDate()
    @IsNotEmpty()
    date: Date
    @ApiProperty({
        example: false,
        description: "chechking is course free or not"
    })
    @IsNotEmpty()
    @IsBoolean()
    isfree: boolean

}
