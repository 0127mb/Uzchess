"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('UzChess API')
        .setDescription('UzChess platform API documentation')
        .setVersion('1.0')
        .addTag('Books', 'Book management endpoints')
        .addTag('Courses', 'Course management endpoints')
        .addTag('Users', 'User management endpoints')
        .addTag('Chess', 'Chess matches and players')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`Application running on http://localhost:${3000}/api`);
}
bootstrap();
