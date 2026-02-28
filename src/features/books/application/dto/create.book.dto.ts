import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class createBookDto {
    @ApiProperty({ example: "The Great Gatsby", description: "Book title" })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({ example: "A classic novel by F. Scott Fitzgerald", description: "Book description" })
    @IsNotEmpty()
    @IsString()
    description: string

    @ApiProperty({ example: 25.99, description: "Book price" })
    @IsNumber()
    @IsNotEmpty()
    price: number

    @ApiProperty({ example: 19.99, description: "Discounted price", required: false })
    @IsNumber()
    @IsOptional()
    newPrice?: number

    @ApiProperty({ example: 1, description: "Author ID" })
    @IsInt()
    @IsNotEmpty()
    authorId: number

    @ApiProperty({ example: 2, description: "Category ID" })
    @IsInt()
    @IsNotEmpty()
    categoryId: number

    @ApiProperty({ example: 3, description: "Language ID" })
    @IsInt()
    @IsNotEmpty()
    languageId: number

    @ApiProperty({ example: 1, description: "Difficulty ID" })
    @IsInt()
    @IsNotEmpty()
    difficultyId: number

    @ApiProperty({ example: 300, description: "Number of pages" })
    @IsInt()
    @IsNotEmpty()
    pages: number

    @ApiProperty({ example: "1925-04-10", description: "Publication date" })
    @IsDate()
    @IsNotEmpty()
    pubDate: Date
}
