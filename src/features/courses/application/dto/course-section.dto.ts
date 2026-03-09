import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CourseSectionDto {
    @ApiProperty({ example: 1, description: "Course ID" })
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty({ example: "Section Title", description: "Section title" })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiPropertyOptional({ example: 1, description: "Section order", required: false })
    @IsInt()
    @IsOptional()
    order?: number;

    @ApiPropertyOptional({ example: "2026-03-06T12:00:00Z", description: "Section creation date", required: false })
    @IsOptional()
    date?: Date;


}
