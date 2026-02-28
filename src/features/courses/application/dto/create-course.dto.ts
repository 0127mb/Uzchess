import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDecimal } from "class-validator";

export class CreateCourseDto {
    @ApiProperty({ example: 1, description: "Author ID" })
    @IsNumber()
    @IsNotEmpty()
    authorId: number;

    @ApiProperty({ example: 1, description: "Category ID" })
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty({ example: 1, description: "Language ID" })
    @IsNumber()
    @IsNotEmpty()
    languageId: number;

    @ApiProperty({ example: 1, description: "Difficulty ID" })
    @IsNumber()
    @IsNotEmpty()
    difficultyId: number;

    @ApiProperty({ example: "JavaScript Advanced", description: "Course title" })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 99.99, description: "Course price" })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({ example: 79.99, description: "Discounted price", required: false })
    @IsNumber()
    @IsOptional()
    newPrice?: number;
}
