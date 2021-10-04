import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SharedModule } from 'src/modules/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [],
  controllers: [UserController]
})
export class UserModule {}
