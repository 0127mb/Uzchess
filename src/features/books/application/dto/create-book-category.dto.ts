import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsString } from "class-validator";

export class CreateBookCategory {
    @ApiProperty({
        example:"hard book",
        description:"title of book"
    })
    @IsString()
    @IsNotEmpty()
    title:string
 
}