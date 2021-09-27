import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {

    }

    @Post()
    public async createUser(@Body() user: UserDto) : Promise<UserDto> {
        return this.userService.createUser(user);
    }
}