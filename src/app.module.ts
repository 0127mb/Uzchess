import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './features/books/books.module';
import { CoursesModule } from './features/courses/courses.module';
import { AuthenticationModule } from './features/auth/Authentication.module';
import { DifficultyModule } from './features/difficulty/difficulty.module';
import { LanguageModule } from './features/languagges/language.module';
// import { ReportModule } from './features/reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url:configService.get<String>("DB_URL") as string,
        entities: [__dirname +'/**/*.entity.{js,ts}'],
        synchronize: true,
        logging: true,
      }),
    }),
    BooksModule,
    CoursesModule,
    AuthenticationModule,
    DifficultyModule,
    LanguageModule,
    // ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
