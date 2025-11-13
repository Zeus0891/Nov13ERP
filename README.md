# Nov13ERP - Enterprise Resource Planning Platform

A modern, enterprise-grade ERP system built with Node.js, TypeScript, Express, Prisma, and PostgreSQL.

## 🚀 Features

- **CRM Module**: Lead management, opportunities, customer relationships
- **Project Management**: Projects, tasks, scheduling, risk management
- **Billing & Finance**: Quotes, contracts, invoices, accounts receivable
- **User Management**: Authentication, authorization, role-based access
- **Modern Tech Stack**: Node.js, TypeScript, Express, Prisma, PostgreSQL
- **Database**: Neon PostgreSQL hosting with connection pooling
- **Security**: JWT authentication, rate limiting, security headers
- **Code Quality**: ESLint, Prettier, Jest testing, TypeScript strict mode

## 🛠️ Technology Stack

- **Backend**: Node.js 20+, Express.js, TypeScript
- **Database**: PostgreSQL (Neon hosting)
- **ORM**: Prisma
- **Authentication**: JWT, bcryptjs
- **Security**: Helmet, CORS, rate limiting
- **Logging**: Winston
- **Testing**: Jest, Supertest
- **Code Quality**: ESLint, Prettier, Husky

## 📋 Prerequisites

- Node.js 20.0.0 or higher
- npm 10.0.0 or higher
- Neon PostgreSQL database account

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zeus0891/Nov13ERP.git
   cd Nov13ERP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Neon database credentials
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

- **Health Check**: `GET /health`
- **API Info**: `GET /api`
- **Authentication**: `POST /api/auth/*`
- **CRM**: `GET|POST|PUT|DELETE /api/crm/*`
- **Projects**: `GET|POST|PUT|DELETE /api/projects/*`
- **Billing**: `GET|POST|PUT|DELETE /api/billing/*`

## 📊 Database Schema

The system includes the following main entities:

- **Users & Roles**: User management and permissions
- **CRM**: Leads, Opportunities, Quotes
- **Projects**: Projects, Tasks, Scheduling
- **Billing**: Contracts, Invoices, Payments

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

Make sure to set these environment variables in production:

- `NEON_DATABASE_URL`: Your Neon PostgreSQL connection string
- `NEON_DIRECT_URL`: Your Neon direct connection string
- `JWT_SECRET`: Strong JWT secret key
- `NODE_ENV`: Set to "production"

## 📁 Project Structure

```
src/
├── config/          # Configuration files
├── middleware/      # Express middleware
├── modules/         # Feature modules
│   ├── auth/        # Authentication
│   ├── crm/         # Customer Relationship Management
│   ├── projects/    # Project Management
│   └── billing/     # Billing & Finance
├── shared/          # Shared utilities
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email flako9108@gmail.com or open an issue on GitHub.

---

Built with ❤️ by Zeus0891