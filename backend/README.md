# Backend - Guru Packers & Movers

Production-ready Node.js + Express server with MongoDB integration.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Firebase Admin SDK
- Google APIs
- Razorpay SDK
- TypeScript

## 📁 Project Structure

```
backend/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── types/
│   └── app.ts
├── scripts/
├── tests/
├── .env.example
├── app.json
├── package.json
└── README.md
```

## 🚀 Quick Start

```bash
cd backend
npm install
npm run dev
```

Server runs on http://localhost:5000

## 📋 API Endpoints

See [../docs/API.md](../docs/API.md) for complete API documentation.

## 🗄️ Database

MongoDB Atlas with collections:
- Users
- Bookings
- Drivers
- Payments
- Notifications
- SavedAddresses
- Services

See [../docs/DATABASE.md](../docs/DATABASE.md) for schema details.

## 🔐 Security

- JWT token authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting
- Input validation & sanitization
- HTTPS enforcement

## 🚀 Deployment

```bash
# Build
npm run build

# Production
npm start

# Docker
docker build -t guru-backend .
docker run -p 5000:5000 guru-backend
```

## 🧪 Testing

```bash
npm run test
npm run test:coverage
```

## 📚 Documentation

- [API Reference](../docs/API.md)
- [Database Schema](../docs/DATABASE.md)
- [Authentication Guide](./docs/AUTH.md)
- [Error Handling](./docs/ERRORS.md)

---

For more details, see the main README.md in the root directory.
