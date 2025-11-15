import { logger } from '@/config/logger';
import { Request, Response } from 'express';

export const notFoundHandler = (req: Request, res: Response): void => {
    const message = `Route ${req.originalUrl} not found`;

    logger.warn(`404 - ${message}`, {
        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
    });

    res.status(404).json({
        status: 'error',
        statusCode: 404,
        message,
        timestamp: new Date().toISOString(),
    });
};