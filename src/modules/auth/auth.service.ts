import { Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';

import { UserServiceInterface } from '../user/user/interface/user.service.interface';

@Injectable()
export class AuthService {
    constructor(
        @Inject('UserServiceInterface')
        private readonly userService: UserServiceInterface
    ) {}
    
    async validateUser(username: string, password: string) : Promise<any> {
        const user = await this.userService.findUserByUserName(username);

        if (user) {
            const isValidUser = compareSync(password, user.Password);
            
            if (isValidUser) return user;
            else return null;
        }

        return null;
    }
}