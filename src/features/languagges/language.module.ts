import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Languages } from "./domain/entites/languages.entity";
import { LanguageController } from "./presentation/controller/language.controller";
import { LanguageService } from "./application/service/language.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Languages
        ])
    ],
    controllers: [LanguageController],
    providers: [LanguageService],
    exports: [LanguageService]
})
export class LanguageModule { }