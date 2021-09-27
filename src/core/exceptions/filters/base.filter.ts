import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import ApiResponse from "../../responses/api.response";

@Catch()
export class BaseExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const httpContext = host.switchToHttp();
        const request = httpContext.getRequest();
        const response = httpContext.getResponse();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        let customResponse = new ApiResponse();
        customResponse.statusCode = status;
        customResponse.data = [];
        customResponse.messages = exception.message ? exception.message : '';

        return response.status(400).json(customResponse);
    }
}