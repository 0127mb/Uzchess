import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Difficulty } from "./domain/entites/difficulty.entity";
import { DifficultyController } from "./infrastructure/controller/difficulty.controller";
import { DifficultyService } from "./application/service/difficulty.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Difficulty
        ])
    ],
    controllers: [DifficultyController],
    providers: [DifficultyService],
    exports: [DifficultyService]
})
export class DifficultyModule { }