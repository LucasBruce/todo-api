import { Request, Response, NextFunction } from 'express';
export declare const middleware: import("express-serve-static-core").Router;
interface IAppError {
    customMessage: string;
    status: number;
}
export declare class AppError extends Error {
    customMessage: string;
    status: number;
    constructor(props: IAppError);
}
export declare const errorLogHandle: (err: AppError, req: Request, res: Response, next: NextFunction) => void;
export declare const errorResponseHandle: (err: AppError, req: Request, res: Response, _: NextFunction) => void;
export {};
