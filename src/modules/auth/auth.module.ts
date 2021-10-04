import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user/user.module';
import { AuthService } from './auth.service';
import { UserService } from '../user/user/user.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtConstants } from '../../constant/constant';
import { AuthController } from './auth.controller';
import { USERSERVICETOKEN } from '../user/user/interface/user.service.interface';
import { AUTHSERVICETOKEN } from './interface/auth.service.interface';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    {
      provide: AUTHSERVICETOKEN,
      useClass: AuthService,
    },
    {
      provide: USERSERVICETOKEN,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: AUTHSERVICETOKEN,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
