import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE, BaseExceptionFilter } from '@nestjs/core';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { CoreModule } from './core/core.module';
import { UserModule } from './modules/user/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CoreModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
