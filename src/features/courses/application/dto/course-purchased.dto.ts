import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { User } from "../../../user/domain/entites/User.entity";
import { CourseEntity } from "../../domain/entites/course.entity";
import { Type } from "class-transformer";

export class CoursePurchasedDto {
    @ApiProperty({
        example: 1,
        description: "User id"
    })
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => User)
    user: User
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CourseEntity)
    course: CourseEntity
    @Type(() => Boolean)
    @ApiProperty({
        example: false,
        description: "isComplited"
    })
    @IsBoolean()
    isCompleted: boolean
    @Type(() => Date)
    @ApiProperty({
        example: "12.02.2026",
        description: "create date",
        format: "date"
    })
    @IsNotEmpty()
    @IsDate()
    date: Date
}
