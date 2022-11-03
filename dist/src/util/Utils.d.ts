import { NextFunction, Request, RequestHandler, Response } from 'express-serve-static-core';
export declare function fullNameConcat(fistName: string, lastName: string): string;
export declare const asyncHandler: (fn: RequestHandler) => (req: Request, res: Response, nextFn: NextFunction) => Promise<void>;
