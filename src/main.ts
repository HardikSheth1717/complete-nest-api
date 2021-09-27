import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import "reflect-metadata";

import { API_PREFIX, API_VERSION } from './constant/constant';
import { AppModule } from './app.module';
import { CustomException } from './core/exceptions/custom.exception';

import { BaseExceptionFilter } from './core/exceptions/filters/base.filter';
import { CustomExceptionFilter } from './core/exceptions/filters/custom.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix(`${API_PREFIX}/${API_VERSION}`);

  app.useGlobalFilters(
    new BaseExceptionFilter(),
    new CustomExceptionFilter()
  );

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => new CustomException(errors)
    })
  )

  await app.listen(config.get('commonEnv.port'));
}
bootstrap();
