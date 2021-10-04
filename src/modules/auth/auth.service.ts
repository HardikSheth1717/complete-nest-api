import { Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserServiceInterface, USERSERVICETOKEN } from '../user/user/interface/user.service.interface';
import { AuthServiceInterface } from './interface/auth.service.interface';
import { UserDto } from '../user/user/dto/user.dto';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject(USERSERVICETOKEN)
    private readonly userService: UserServiceInterface,
    private readonly jwtService: JwtService,
  ) {}

  async getUser(username: string, password: string): Promise<UserDto> {
    const user = await this.userService.findUserByUserName(username);
    if (user) {
      console.log(user.password, password);
      const isValidUser = compareSync(password, user.password.toString());

      if (isValidUser) return user;
      else return null;
    }

    return null;
  }

  public login(user: { Mobile: string; UserId: string }): {
    access_token: string;
  } {
    const payload = {
      username: user.Mobile,
      sub: user.UserId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
