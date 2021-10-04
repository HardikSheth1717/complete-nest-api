import {
  Controller,
  Inject,
  Post,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthServiceInterface, AUTHSERVICETOKEN } from './interface/auth.service.interface';
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTHSERVICETOKEN)
    private readonly authService: AuthServiceInterface,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request: any): { access_token: string } {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request() request: any): Promise<any> {
    return request.user;
  }
}
