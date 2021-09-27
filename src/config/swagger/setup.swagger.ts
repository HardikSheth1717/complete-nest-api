import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
    static StatupSwager(app: INestApplication) {
        const swaggerConfig = new DocumentBuilder()
        .setTitle('A complete NestJS API structure')
        .setDescription('A complete NestJS API structure tutorial')
        .setVersion('1.0')
        .addTag('NestJs')
        .build()

        const document = SwaggerModule.createDocument(app, swaggerConfig);
        SwaggerModule.setup('help', app, document);
    }
}