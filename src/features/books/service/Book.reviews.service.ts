import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookReviewsEntity } from "../domain/entites/book-reviews.entity";
import { Repository } from "typeorm";
import { CreateBookReviews } from "../application/dto/create-book-reviews.dto";
import { GetBookReviews } from "../application/dto/get-book-reviews.dto";

@Injectable()
export class BookReviewsService {
    constructor(@InjectRepository(BookReviewsEntity)
    private reviewsrepo: Repository<BookReviewsEntity>
    ) { }
    async create(dto: CreateBookReviews): Promise<BookReviewsEntity> {
        const reviews = BookReviewsEntity.create()
        return await this.reviewsrepo.save(reviews)
    }
    async getall(query?: GetBookReviews): Promise<BookReviewsEntity[]> {
        const qb = this.reviewsrepo.createQueryBuilder("reviews")
        if (query.bookId) {
            qb.andWhere("reviews.bookId = Like :bookId  ", { bookId: `%${query.bookId}` })
        } if (query.comment) {
            qb.andWhere("reviews.coment = Like :comment  ", { comment: `%${query.bookId}` })
        } if (query.rating) {
            qb.andWhere("revies.raitng = Like :raitng  ", { Rating: `%${query.rating}` })
        }
        if (query.userId) {
            qb.andWhere("reviews.UserId = Like :UserId  ", { UserId: `%${query.userId}` })
        }

        return qb.getMany()
    }
}