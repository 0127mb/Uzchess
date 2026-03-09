import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookLikesEntity } from "../domain/entites/book-likes.entity";
import { CreateBookLikes } from "../application/dto/create-book-likes.dto";
import { Repository } from "typeorm";
import { GetBooklikesDto } from "../application/dto/get-book-likes.dto";

@Injectable()
export class BooklikesService {
    constructor(
        @InjectRepository(BookLikesEntity)
        private likesrepo: Repository<BookLikesEntity>
    ) { }
    async createLikes(dto: CreateBookLikes): Promise<BookLikesEntity> {
        const likes = BookLikesEntity.create(dto)
        return await this.likesrepo.save(likes)

    }
    async getall(query?: GetBooklikesDto): Promise<BookLikesEntity[]> {
        const qb = this.likesrepo.createQueryBuilder("likes")
        if (query.Date) {
            qb.andWhere("likes.date = Like :date", { date: `%${query.Date}` })
        }
        if (query.bookId) {
            qb.andWhere("bookId = Like :bookId", { booId: `%${query.bookId}` })
        }
        if (query.userId) {
            qb.andWhere("userId = Like :userId", { userId: `%${query.userId}` })
        }
        return qb.getMany()
    }
}