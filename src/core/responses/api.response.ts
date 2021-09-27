import { HttpStatus } from "@nestjs/common";

export default class ApiResponse {
    statusCode: HttpStatus;
    data: any;
    messages: any;
}