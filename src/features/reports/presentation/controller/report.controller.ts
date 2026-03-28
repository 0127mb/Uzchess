import { BadRequestException, Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ReportService } from "../../application/service/report.service";
import { ReportsDto } from "../../application/dto/reports.dto";
import { ReportsEntity } from "../../domain/entites/reports.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("reports")
@ApiTags("reports")
export class ReportsController {
    constructor(private readonly service: ReportService) { }

    @Post()
    async sendReport(@Body() dto: ReportsDto): Promise<{ status: number; message: string; data: ReportsEntity }> {
        const result = await this.service.sendReport(dto);
        return result;
    }

    @Get()
    async getRepot(@Query("date") date: string) {
        if (!date) {
            throw new BadRequestException("Please provide a date query parameter")
        }
        return await this.service.getReport(date)
    }

}