import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class ExceptionHandler implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
