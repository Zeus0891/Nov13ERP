import winston from 'winston';

// Define log levels
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Define colors for each level
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

// Add colors to winston
winston.addColors(colors);

// Define format
const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

// Define transports
const transports = [
    // Console transport
    new winston.transports.Console(),

    // File transport for errors
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),

    // File transport for all logs
    new winston.transports.File({
        filename: 'logs/combined.log',
    }),
];

// Create logger
export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    levels,
    format,
    transports,
});

// If we're not in production, log to the console with colorized output
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
}

export default logger;