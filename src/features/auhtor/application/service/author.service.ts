import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Auhtors } from "../../domain/entites/auhtor.entity";
import { Repository } from "typeorm";
import { authorDto } from "../dto/author.dto";

@Injectable()
export class AuthorService {
    constructor(@InjectRepository(Auhtors) private repo: Repository<Auhtors>) { }
    async createAuthor(dto: authorDto) {
        const create = this.repo.create(dto)
        return await this.repo.save(create)
    }
}