"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandler = void 0;
class ExceptionHandler {
    catch(exception, host) {
        exception.getStatus;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response
            .status(401)
            .json({
            statusCode: 401,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
exports.ExceptionHandler = ExceptionHandler;
//# sourceMappingURL=exception-handler.js.map