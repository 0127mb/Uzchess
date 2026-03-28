import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DifficultyService } from "../../application/service/difficulty.service";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { DifficultyDto } from "../../application/dto/difficulty.dto";
import { diskStorage } from "multer";
import { Difficulty } from "../../domain/entites/difficulty.entity";
@ApiTags("difficulty")
@Controller("difficulty")
export class DifficultyController {
    constructor(private readonly service: DifficultyService) { }
    @Post("upload")
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(
        FilesInterceptor(
            "file",
            5,
            {
                storage: diskStorage({
                    destination: "./uploads/difficulty",
                    filename: (req, file, cb) => {
                        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                        cb(null, uniqueSuffix + "-" + file.originalname);
                    },
                }),
            }
        )
    )
    async createDifficulty(@UploadedFile() file: Express.Multer.File, @Body() dto: DifficultyDto) {
        if (!file) {
            throw new BadRequestException("file does not exist")
        }
        return await this.service.createDifficulty(dto, file)
    }

    @Get()
    async getDifficulties(@Query() query: DifficultyDto): Promise<Difficulty[]> {
        return await this.service.getDifficulties(query);
    }
}