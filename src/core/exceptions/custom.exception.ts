import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(public messages: ValidationError[]) {
    super(messages, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
