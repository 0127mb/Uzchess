import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './domain/entites/book.entity';
import { BookCategoryEntity } from './domain/entites/book-category.entity';
import { BookReviewsEntity } from './domain/entites/book-reviews.entity';
import { BookLikesEntity } from './domain/entites/book-likes.entity';
import { BookService } from './service/Book.service';
import { BooksController } from './infrastracture/controllers/books.controller';
import { BookLikesController } from './infrastracture/controllers/book-likes.controller';
import { BookReviewsController } from './infrastracture/controllers/book-reviews.controller';
import { BookCategoryController } from './infrastracture/controllers/book-category.controller';
import { BookCategoryService } from './service/Book-category.service';
import { BooklikesService } from './service/Book.likes.service';
import { BookReviewsService } from './service/Book.reviews.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BookCategoryEntity, BookReviewsEntity, BookLikesEntity])],
  controllers: [BooksController,BookLikesController,BookReviewsController,BookCategoryController],
  providers: [BookService,BookCategoryService,BooklikesService,BookReviewsService],
  exports: [BookService,BookCategoryService,BooklikesService,BookReviewsService],
})
export class BooksModule {}
