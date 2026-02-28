import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './domain/entites/book.entity';
import { BookCategoryEntity } from './domain/entites/book-category.entity';
import { BookReviewsEntity } from './domain/entites/book-reviews.entity';
import { BookLikesEntity } from './domain/entites/book-likes.entity';
import { BookService } from './service/Book.service';
import { BooksController } from './infrastracture/controllers/books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BookCategoryEntity, BookReviewsEntity, BookLikesEntity])],
  controllers: [BooksController],
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
