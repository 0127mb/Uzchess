import { ApiProperty } from "@nestjs/swagger";

export class GetBookCategoryDto {
    @ApiProperty({
        example: "title",
        description: "title of book category"
    })
    title: string
}
