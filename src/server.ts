import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import 'reflect-metadata';

import { prisma } from '@/config/database';
import { logger } from '@/config/logger';
import { errorHandler } from '@/middleware/errorHandler';
import { notFoundHandler } from '@/middleware/notFoundHandler';
import { requestLogger } from '@/middleware/requestLogger';

// Load environment variables
dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || 'localhost';

// ================================
// SECURITY MIDDLEWARE
// ================================

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.',
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all requests
app.use('/api/', limiter);

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
    },
}));

// CORS configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// ================================
// GENERAL MIDDLEWARE
// ================================

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(morgan(process.env.LOG_FORMAT || 'combined'));
app.use(requestLogger);

// ================================
// HEALTH CHECK
// ================================
app.get('/health', async (_req, res) => {
    try {
        // Check database connection
        await prisma.$queryRaw`SELECT 1`;

        res.status(200).json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV,
            version: process.env.npm_package_version || '1.0.0',
            database: 'connected',
        });
    } catch (error) {
        logger.error('Health check failed:', error);
        res.status(503).json({
            status: 'error',
            timestamp: new Date().toISOString(),
            database: 'disconnected',
        });
    }
});

// ================================
// API ROUTES
// ================================
app.get('/api', (_req, res) => {
    res.json({
        message: 'Nov13ERP API - Enterprise Resource Planning Platform',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        endpoints: {
            health: '/health',
            docs: '/api/docs',
            auth: '/api/auth',
            crm: '/api/crm',
            projects: '/api/projects',
            billing: '/api/billing',
        },
    });
});

// TODO: Add route modules
// app.use('/api/auth', authRoutes);
// app.use('/api/crm', crmRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/billing', billingRoutes);

// ================================
// ERROR HANDLING
// ================================
app.use(notFoundHandler);
app.use(errorHandler);

// ================================
// SERVER STARTUP
// ================================
const startServer = async (): Promise<void> => {
    try {
        // Connect to database
        await prisma.$connect();
        logger.info('✅ Database connected successfully');

        // Start server
        app.listen(PORT, HOST, () => {
            logger.info(`🚀 Nov13ERP Server running on http://${HOST}:${PORT}`);
            logger.info(`📊 Environment: ${process.env.NODE_ENV}`);
            logger.info(`🔍 Health check: http://${HOST}:${PORT}/health`);
            logger.info(`📖 API docs: http://${HOST}:${PORT}/api`);
        });
    } catch (error) {
        logger.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Graceful shutdown
const gracefulShutdown = async (): Promise<void> => {
    logger.info('🔄 Graceful shutdown initiated...');

    try {
        await prisma.$disconnect();
        logger.info('✅ Database disconnected');
        process.exit(0);
    } catch (error) {
        logger.error('❌ Error during shutdown:', error);
        process.exit(1);
    }
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start the server
startServer().catch((error) => {
    logger.error('❌ Unhandled error during server startup:', error);
    process.exit(1);
});

export default app;
