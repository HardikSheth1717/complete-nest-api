import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE, BaseExceptionFilter } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { CustomExceptionFilter } from './core/exceptions/filters/custom.filter';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: BaseExceptionFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    AppService
  ],
})
export class AppModule {}
