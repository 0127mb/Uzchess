import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetBookReviews{
    @ApiProperty({
        example:1,
        description:"user Id"
    })
        @IsInt()
        @IsNotEmpty()
        userId:number
        @ApiProperty({
            example:1,
            description:"book id"
        })
        @IsInt()
        @IsNotEmpty()
        bookId:number
        @ApiProperty({
            example:1,
            description:"rating of books",
            format:"number"
        })
        @IsInt()
        @IsNotEmpty()
        rating:number
        @ApiProperty({
            example:"that was the great book I ever readed",
            description:"comment of books",
            format:"string"
        })
        @IsString()
        @IsOptional()
        comment:string
}