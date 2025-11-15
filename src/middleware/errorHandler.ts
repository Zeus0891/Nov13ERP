import { logger } from '@/config/logger';
import { NextFunction, Request, Response } from 'express';

export interface ApiError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}

export class AppError extends Error implements ApiError {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational = true) {
        super(message);

        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (
    error: ApiError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
): void => {
    const { statusCode = 500, message } = error;

    // Log error details
    logger.error(`Error ${statusCode}: ${message}`, {
        error: error.stack,
        url: req.url,
        method: req.method,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
    });

    // Send error response
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message: process.env.NODE_ENV === 'production'
            ? (statusCode >= 500 ? 'Internal Server Error' : message)
            : message,
        ...(process.env.NODE_ENV === 'development' && {
            stack: error.stack,
            timestamp: new Date().toISOString(),
        }),
    });
};