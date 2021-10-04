import { Controller, Post, Body, Inject } from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UserServiceInterface } from './interface/user.service.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Post()
  public createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }
}
