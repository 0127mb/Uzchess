import { Controller, Post, Body, UseInterceptors, UploadedFile, BadRequestException, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BookService } from '../../service/Book.service';
import { createBookDto } from '../../application/dto/create-book.dto';
import { diskStorage } from 'multer';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) { }


  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/books',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @Post('create')
  async createBook(
    @Body() dto: createBookDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return await this.bookService.createBook(dto, file);
  }
  @Get("get")
  async getBook() {
    return this.bookService.getBook()
  }
}
