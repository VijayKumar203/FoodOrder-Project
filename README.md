# 🍔 FoodOrder – MERN Stack Food Ordering Website

A full-stack food ordering web application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application allows customers to explore restaurants, browse food items, add products to their cart, place orders, and make payments using Stripe.

## 📌 Project Overview

FoodOrder is an online food ordering platform designed to simplify the food ordering process. Customers can browse available food items, manage their shopping cart, and complete orders through online payments.

The application also includes restaurant and food management functionality.

## ✨ Features

### 👤 User Features
- User registration and login.
- User authentication and account management.
- Browse restaurants and food items.
- View food item details and prices.
- Add food items to the shopping cart.
- Update food quantities and remove items.
- Place food orders.
- Secure online payments using Stripe.
- View personal order history.
- View individual order details.
- Forgot password and password reset functionality.
- Update user profile information.

### 🏪 Restaurant and Food Features
- Browse available restaurants.
- View restaurant food menus.
- Explore food items and prices.
- Manage food and restaurant information.

### 💳 Payment Features
- Stripe Checkout integration.
- Online payment processing.
- Order creation after successful payment.

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux
- React Router DOM
- Axios
- Bootstrap
- React Icons
- React Toastify
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
- Stripe
- Cloudinary
- Nodemailer
- Multer

### Development Tools
- Visual Studio Code
- Git and GitHub
- npm
- Postman
- Render

## 📂 Project Structure

```text
FoodOrder-Project/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── store.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── Backend-obfuscated/
│   ├── backend/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── utils/
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── SECURITY.md
```

*Note: The folder structure above illustrates the main project organization. Individual files and folders may vary.*

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Install the following before running the application:

- Node.js
- npm
- MongoDB database
- Git
- Stripe account
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/VijayKumar203/FoodOrder-Project.git
```

Navigate to the project:

```bash
cd FoodOrder-Project
```

### 2. Setup the Backend

Navigate to the backend directory:

```bash
cd Backend-obfuscated
```

Install dependencies:

```bash
npm install
```

Configure your environment variables in the backend configuration file.

The application uses configuration values for:

- MongoDB database connection
- JWT authentication
- Cloudinary credentials
- Stripe API credentials
- Email service credentials
- Server port and environment

Start the backend:

```bash
npm start
```

The backend is configured to use port `4000` by default unless another port is specified through the environment.

### 3. Setup the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd FoodOrder-Project/frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend development server normally runs at:

```text
http://localhost:3000
```

The frontend is configured to proxy API requests to:

```text
http://127.0.0.1:4000
```

### 4. Access the Application

Open your browser:

```text
http://localhost:3000
```

Make sure both the frontend and backend servers are running.

## 🔐 Environment Configuration

The backend requires environment variables for database connectivity, authentication, payments, image hosting, and email functionality.

Configure the environment file according to the variable names used in your backend source code.

Typical configuration categories include:

```env
PORT=4000
NODE_ENV=DEVELOPMENT

# Database
DB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=your_jwt_expiry

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Important:** These are illustrative configuration names. Verify the exact database, JWT, Stripe, and email variable names against your backend code before using them.

Never upload real credentials, API keys, database passwords, or secret tokens to GitHub.

## 💳 Stripe Payment Integration

The project uses Stripe for online payment processing.

General payment flow:

1. Customer selects food items.
2. Items are added to the shopping cart.
3. Customer proceeds to checkout.
4. Backend creates a Stripe Checkout Session.
5. Customer completes payment through Stripe.
6. The application processes the payment session and creates the order.
7. Customer can view the order in their order history.

Use Stripe test-mode credentials when testing payments locally.

## 🔗 API Endpoints

Some API endpoints used by the application include:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/v1/payment/process` | Create payment session |
| POST | `/api/v1/eats/orders/new` | Create an order |
| GET | `/api/v1/eats/orders/me/myOrders` | Get customer orders |
| GET | `/api/v1/eats/orders/:id` | Get order details |

Additional endpoints are available for authentication, restaurants, food items, and user management.

## 🚀 Deployment

The application can be deployed using platforms such as Render.

Deployment requires:

- Backend environment variables.
- MongoDB database connectivity.
- Stripe configuration.
- Cloudinary configuration.
- Correct frontend build settings.
- Correct backend start command.
- Appropriate frontend and backend URLs.

Configure the deployment settings according to the actual project structure and hosting configuration.

## 🔒 Security

Security is important for this application.

- Store sensitive credentials in environment variables.
- Never expose Stripe secret keys in frontend code.
- Use secure authentication practices.
- Validate user input on the backend.
- Keep dependencies updated.
- Review security vulnerabilities regularly.

For security-related information and responsible vulnerability disclosure, refer to [SECURITY.md](./SECURITY.md).

## 👨‍💻 Author

**Vijay Kumar Pappala**

GitHub: [VijayKumar203](https://github.com/VijayKumar203)

Project Repository: [FoodOrder-Project](https://github.com/VijayKumar203/FoodOrder-Project)

## 📄 License

This project currently uses the license specified in the project repository's package configuration. Refer to the repository for licensing details.

---
