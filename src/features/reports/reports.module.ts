import { Module } from "@nestjs/common";
import { ReportsEntity } from "./domain/entites/reports.entity";
import { ReportCategoriesEntity } from "./domain/entites/report-categories.entity";
import { ReportsController } from "./presentation/controller/report.controller";
import { ReportsCategoryController } from "./presentation/controller/reports-category.controller";
import { ReportService } from "./application/service/report.service";
import { ReportCategoryService } from "./application/service/report-category.service";

@Module({
    imports: ([
        ReportsEntity,
        ReportCategoriesEntity
    ]),
    controllers: [
        ReportsController,
        ReportsCategoryController
    ],
    providers: [
        ReportService,
        ReportCategoryService
    ], exports: [
        ReportService,
        ReportCategoryService
    ]
})
export class ReportModule { }
