import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto {
    @ApiProperty({ example: "JavaScript Advanced Updated", description: "Course title", required: false })
    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({ example: 89.99, description: "Updated course price", required: false })
    @IsNumber()
    @IsOptional()
    price?: number;

    @ApiProperty({ example: 69.99, description: "Updated discounted price", required: false })
    @IsNumber()
    @IsOptional()
    newPrice?: number;

    @ApiProperty({ example: 1, description: "Author ID", required: false })
    @IsNumber()
    @IsOptional()
    authorId?: number;

    @ApiProperty({ example: 1, description: "Category ID", required: false })
    @IsNumber()
    @IsOptional()
    categoryId?: number;

    @ApiProperty({ example: 1, description: "Language ID", required: false })
    @IsNumber()
    @IsOptional()
    languageId?: number;

    @ApiProperty({ example: 1, description: "Difficulty ID", required: false })
    @IsNumber()
    @IsOptional()
    difficultyId?: number;
}
