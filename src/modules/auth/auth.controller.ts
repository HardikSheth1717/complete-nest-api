import { Controller, Inject, Post, Get, Request,  UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthServiceInterface } from './interface/auth.service.interface';
@Controller('auth')
export class AuthController {
    constructor(
        @Inject('AuthServiceInterface')
        private readonly authService: AuthServiceInterface
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() request: any): Promise<any> {
        return this.authService.login(request.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile(@Request() request: any): Promise<any> {
        return request.user;
    }
}