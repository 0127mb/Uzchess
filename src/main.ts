import "dotenv/config"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('UzChess API')
    .setDescription('UzChess platform API documentation')
    .setVersion('1.0')
    .addTag('Books', 'Book management endpoints')
    .addTag('Courses', 'Course management endpoints')
    .addTag('Users', 'User management endpoints')
    .addTag('Chess', 'Chess matches and players')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
 

    console.log(`Application running on http://localhost:${3000}/api`);
}
bootstrap();
