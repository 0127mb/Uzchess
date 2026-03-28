import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Difficulty } from "../../domain/entites/difficulty.entity";
import { Repository } from "typeorm";
import { DifficultyDto } from "../dto/difficulty.dto";

@Injectable()

export class DifficultyService {
    constructor(@InjectRepository(Difficulty) private repo: Repository<Difficulty>) { }
    async createDifficulty(dto: DifficultyDto,file:Express.Multer.File): Promise<Difficulty> {
        const iconPath =file?.filename
        const difficuty = this.repo.create({...dto,icon:iconPath})
        await this.repo.save(difficuty)
        return difficuty
    }
    async getDifficulties(query?: DifficultyDto): Promise<Difficulty[]> {
        const qb = this.repo.createQueryBuilder("difficulty")
        if(query.icon){
            qb.andWhere("difficulty.icon = :icon", {icon:`%${query.icon}`})
        }
            if(query.title){
            qb.andWhere("difficulty.title = :title", {title:`%${query.title}`})
        }
        return qb.getMany()
    }
}