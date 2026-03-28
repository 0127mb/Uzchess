import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ReportType } from "../../../../constants/enum/ReportType.enum";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class ReportsDto {
    @ApiProperty({
        enum: ReportType
    })

    @IsNotEmpty()
    @IsEnum(ReportType)
    target: ReportType
    @ApiProperty({
        type: "number",
        example: 1,
        description: "target id"
    })
    @Type(() => Number)
    @IsInt()
    targetId: number;
    @ApiProperty({
        type: "string",
        example: "how ever vscode is better than other code apps said someone do you agree this sentence"
    })
    @Type(() => String)
    @IsString()
    @IsOptional()
    description?: string;
    @ApiProperty({
        type: "string",
        example: "23.09.1209"
    })
    @IsDate()
    @IsNotEmpty()
    date: Date;
}