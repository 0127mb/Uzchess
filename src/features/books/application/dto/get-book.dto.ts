import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class GetBookDto {
    @ApiProperty({})

    title: string

    @ApiProperty({})
    description: string

    @ApiProperty({})

    price: number

    @ApiProperty({})

    newPrice?: number

    @ApiProperty({})

    authorId: number

    @ApiProperty({})

    categoryId: number

    @ApiProperty({})

    languageId: number

    @ApiProperty({})

    difficultyId: number

    @ApiProperty({})

    pages: number

    @ApiProperty({})

    pubDate: Date
}
