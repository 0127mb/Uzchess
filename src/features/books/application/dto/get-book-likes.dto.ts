import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsInt, IsNotEmpty } from "class-validator"

export class GetBooklikesDto{
       @ApiProperty({
            example: 1,
            description: "user Id"
        })
        @IsInt()
        @IsNotEmpty()
        userId: number
        @ApiProperty({
            example: 1,
            description: "book id",
            format:"number"
        })
        @IsInt()
        @IsNotEmpty()
        bookId: number
        @ApiProperty({
            example:"2025-03-02T10:30:00.000Z",
            description:"reviews date",
            format:"date"
        })
        @IsDate()
        @IsNotEmpty() 
        Date: Date
}