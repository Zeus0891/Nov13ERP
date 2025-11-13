import { PrismaClient } from '@prisma/client';
import { logger } from './logger';

declare global {
    // eslint-disable-next-line no-var, vars-on-top
    var __prisma: PrismaClient | undefined;
}

// Singleton pattern for Prisma Client to prevent connection issues in development
export const prisma = globalThis.__prisma || new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
});

// Log database queries in development
if (process.env.NODE_ENV === 'development') {
    prisma.$on('query', (e: any) => {
        logger.debug('Query: ' + e.query);
        logger.debug('Params: ' + e.params);
        logger.debug('Duration: ' + e.duration + 'ms');
    });
}

// Log database errors
prisma.$on('error', (e: any) => {
    logger.error('Database error:', e);
});

// Prevent multiple instances in development
if (process.env.NODE_ENV !== 'production') {
    globalThis.__prisma = prisma;
}

export default prisma;