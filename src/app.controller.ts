import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GetIdDto } from './core/dto/getId.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  getHello(@Body() data: GetIdDto) {
    return this.appService.getHello();
    // throw new HttpException({
    //   statusCode: HttpStatus.FORBIDDEN,
    //   data: [],
    //   messages: "Error"
    // }, HttpStatus.FORBIDDEN);
  }
}
