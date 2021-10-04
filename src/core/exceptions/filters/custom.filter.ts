import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import ApiResponse from '@core/responses/api.response';
import { CustomException } from '../custom.exception';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    const httpContext = host.switchToHttp();

    const response = httpContext.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const propertyList = exception.messages.map(
      (x: { property: any }) => x.property,
    );

    const messages = {};

    propertyList.forEach((property: string | number) => {
      const exceptionObj = exception.messages.find(
        (x: { property: string | number }) => x.property === property,
      );

      if (exceptionObj) {
        messages[property] = Object.values(exceptionObj.constraints);
      }
    });

    const customResponse = new ApiResponse<[] | {}>(
      exception.messages.length > 0 ? HttpStatus.BAD_REQUEST : status,
      [],
      messages,
    );

    return response.status(400).json(customResponse);
  }
}
