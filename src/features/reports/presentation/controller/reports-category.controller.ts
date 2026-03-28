import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ReportCategoryService } from "../../application/service/report-category.service";
import { ReportsCategoryDto } from "../../application/dto/reports-category.dto";

@Controller("report-category")
@ApiTags("reports-category")
export class ReportsCategoryController {
    constructor(private readonly service: ReportCategoryService) { }
    @Post()
    async createCategory(@Body() dto: ReportsCategoryDto) {
        const service = await this.service.createRepots(dto)
        return service
    }
    @Get()
    async getReportsCategory(@Body() dto: ReportsCategoryDto) {
        const res = await this.service.getreportTypes(dto)
        return res

    }
}