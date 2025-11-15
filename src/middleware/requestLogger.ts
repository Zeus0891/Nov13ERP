import { logger } from '@/config/logger';
import { NextFunction, Request, Response } from 'express';

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const start = Date.now();

    // Log request
    logger.http(`${req.method} ${req.url}`, {
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
    });

    // Override res.end to log response
    const originalEnd = res.end;
    res.end = function (chunk?: any, encoding?: any, cb?: any): Response {
        const duration = Date.now() - start;

        logger.http(`${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`, {
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            duration,
            ip: req.ip,
        });

        return originalEnd.call(this, chunk, encoding, cb);
    };

    next();
};