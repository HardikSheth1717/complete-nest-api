import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { PersonRepository } from './repository/user.repository';
import { UserService } from './user.service';
import { PERSONREPOSITORYTOKEN } from './interface/user.repository.interface';
import { USERSERVICETOKEN } from './interface/user.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: PERSONREPOSITORYTOKEN,
      useClass: PersonRepository,
    },
    {
      provide: USERSERVICETOKEN,
      useClass: UserService,
    },
  ],
  controllers: [UserController],
  exports: [
    TypeOrmModule,
    {
      provide: PERSONREPOSITORYTOKEN,
      useClass: PersonRepository,
    },
    {
      provide: USERSERVICETOKEN,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
