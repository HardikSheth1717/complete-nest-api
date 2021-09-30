import { Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserServiceInterface } from '../user/user/interface/user.service.interface';
import { AuthServiceInterface } from './interface/auth.service.interface';
import { UserDto } from '../user/user/dto/user.dto';

@Injectable()
export class AuthService implements AuthServiceInterface {
    constructor(
        @Inject('UserServiceInterface')
        private readonly userService: UserServiceInterface,
        private readonly jwtService: JwtService
    ) {}
    
    async validateUser(username: string, password: string) : Promise<UserDto> {
        const user = await this.userService.findUserByUserName(username);
        
        if (user) {
            const isValidUser = compareSync(password, user[0].Password.toString());
            
            if (isValidUser) return user[0];
            else return null;
        }

        return null;
    }

    async login(user: any): Promise<any> {
        const payload = {
            username: user.Mobile,
            sub: user.UserId
        };
        
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}