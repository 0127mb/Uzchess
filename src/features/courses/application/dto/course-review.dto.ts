import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CourseReviewDto {
    @ApiProperty({ example: 1, description: "Course ID" })
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty({ example: 1, description: "User ID" })
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({ example: 5, description: "Rating" })
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @ApiPropertyOptional({ example: "Great course!", description: "Review comment", required: false })
    @IsString()
    @IsOptional()
    comment?: string;
}
