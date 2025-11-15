// Global test setup
import 'reflect-metadata';

// Mock environment variables for tests
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-jwt-secret';
process.env.NEON_DATABASE_URL = 'postgresql://test:test@localhost:5432/test';

// Mock console methods in tests to reduce noise
if (process.env.NODE_ENV === 'test') {
    global.console = {
        ...console,
        log: jest.fn(),
        debug: jest.fn(),
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
    };
}