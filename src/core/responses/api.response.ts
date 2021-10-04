import { HttpStatus } from '@nestjs/common';

export default class ApiResponse<T> {
  constructor(
    public statusCode: HttpStatus,
    public data: T,
    public messages: T,
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.messages = messages;
  }
}
