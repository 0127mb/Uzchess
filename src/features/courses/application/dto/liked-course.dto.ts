import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class LikedCourseDto {
    @ApiProperty({ example: 1, description: "Course ID" })
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty({ example: 1, description: "User ID" })
    @IsInt()
    @IsNotEmpty()
    userId: number;
}
