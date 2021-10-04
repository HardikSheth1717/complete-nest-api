import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import ApiResponse from '@core/responses/api.response';

@Catch()
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const httpContext = host.switchToHttp();

    const response = httpContext.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const customResponse = new ApiResponse<[] | {}>(
      status,
      [],
      exception.message ?? '',
    );

    return response.status(400).json(customResponse);
  }
}
