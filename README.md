# 🍔 FoodOrder – MERN Stack Food Ordering Website

A full-stack food ordering web application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application allows customers to explore restaurants, browse food items, add products to their cart, place orders, and make payments using Stripe.

The project includes user authentication, restaurant and food management, shopping cart functionality, order management, payment integration, and customer order history.

---

## 📌 Project Overview

FoodOrder is an online food ordering platform designed to simplify the food ordering process.

Customers can browse available restaurants, explore food menus, manage their shopping carts, complete online payments, and view their previous orders.

The application also includes backend functionality for managing users, restaurants, food items, payments, and customer orders.

The project is deployed using **Render**, with separate frontend and backend services.

## ✨ Features

### 👤 User Features

- User registration and login.
- User authentication using JWT.
- Secure HTTP-only authentication cookies.
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

### 🛒 Shopping Cart and Order Features

- Add food items to the cart.
- Update item quantities.
- Remove products from the cart.
- Calculate order totals.
- Create customer orders.
- Associate orders with the authenticated customer.
- Retrieve individual customer order history.
- View order details and order status.

### 💳 Payment Features

- Stripe Checkout integration.
- Online payment processing.
- Backend-generated Stripe Checkout Sessions.
- Successful and cancelled payment redirects.
- Order creation after successful payment processing.

### 🔐 Authentication and Security Features

- JWT-based user authentication.
- HTTP-only cookies for authentication.
- Secure cookies in production.
- Cross-origin resource sharing (CORS) configuration.
- Credential-based frontend API requests.
- Password hashing using bcrypt.
- Environment-based configuration.

---

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
- Cookie Parser
- CORS
- Express File Upload

### Development and Deployment Tools

- Visual Studio Code
- Git and GitHub
- npm
- Postman
- Render
- MongoDB Atlas
- Stripe Dashboard
- Google Chrome Developer Tools

---

## 🌐 Live Deployment

The application is deployed on Render using separate frontend and backend services.

| Service | Deployment URL |
|---|---|
| Frontend | https://food-order-website-gmc8.onrender.com |
| Backend | https://food-order-backend-yg6r.onrender.com |

### Backend Health Check

The backend provides a health-check endpoint:

https://food-order-backend-yg6r.onrender.com

Expected response:

```json
{
  "status": "success",
  "message": "FoodOrder Backend API is running successfully!"
}
```

---

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
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── SECURITY.md
```

*Note: This folder structure illustrates the main project organization. Individual files and folders may vary.*

---

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

Configure the backend environment variables using the names expected by the backend source code.

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

The frontend development proxy is configured to forward API requests to:

```text
http://127.0.0.1:4000
```

### 4. Access the Application

Open your browser:

```text
http://localhost:3000
```

Make sure both frontend and backend servers are running.

---

## 🔐 Environment Configuration

The backend requires environment variables for database connectivity, authentication, payments, image hosting, email functionality, and server configuration.

Configure the environment file according to the exact variable names used in your backend source code.

Example configuration categories:

```env
PORT=4000
NODE_ENV=development

# Database
DB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_TIME=your_jwt_expiry

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

**Important:** These are illustrative examples. Confirm the actual environment variable names in your backend source code before configuring them. Do not create duplicate or incorrectly named variables.

For production, configure the environment variables in the Render dashboard rather than committing secret files to GitHub.

Never upload real credentials, API keys, database passwords, or secret tokens to GitHub.

---

## 🔑 Authentication and Cookie Configuration

The application uses JWT-based authentication with HTTP-only cookies.

After successful registration or login, the backend generates a JWT and sends it to the browser through a `Set-Cookie` response header.

### Production Cookie Configuration

The production authentication cookie uses the following settings:

```javascript
{
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production"
        ? "none"
        : "lax",
    path: "/"
}
```

These settings are intended to support secure authentication between the separately hosted frontend and backend.

### Frontend Axios Configuration

The frontend must include credentials when communicating with the backend.

Example:

```javascript
axios.defaults.withCredentials = true;
```

The API base URL is configured using the frontend environment configuration.

### Backend CORS Configuration

The backend allows requests from the deployed frontend origin.

```javascript
app.use(cors({
    origin: "https://food-order.website.com",
    credentials: true,
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS"
    ],
    allowedHeaders: [
        "Content-Type",
        "Authorization"
    ]
}));
```

CORS middleware must be registered before the API routes.

The backend must return the correct `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials` response headers for credentialed requests.

### Important: Third-Party Cookie Restrictions

Because the frontend and backend use separate Render hostnames, authentication requests are cross-site.

Some browsers, including Chrome in Incognito mode, may block third-party cookies depending on the user's privacy settings.

A browser warning such as:

```text
This attempt to set a cookie via a "Set-Cookie" header
was blocked due to user preferences.
```

indicates that the browser blocked the authentication cookie.

For testing:

1. Open the application in Chrome Incognito.
2. Check the browser's third-party cookie settings.
3. Allow third-party cookies for the application if the browser provides that option.
4. Log in again.
5. Refresh the page.
6. Verify that the authentication session remains active.

**Note:** Allowing third-party cookies is a browser-side testing workaround. It does not guarantee that authentication will work for every user or browser.

For a more reliable production architecture, consider configuring custom domains under the same parent domain, for example:

```text
Frontend: https://app.yourdomain.com
Backend:  https://api.yourdomain.com
```

This allows both services to operate under the same site context, reducing cross-site cookie restrictions. Correct cookie and CORS configuration is still required.

---

## 💳 Stripe Payment Integration

The project uses Stripe for online payment processing.

### Payment Workflow

1. Customer selects food items.
2. Items are added to the shopping cart.
3. Customer proceeds to checkout.
4. Backend creates a Stripe Checkout Session.
5. Customer completes payment through Stripe Checkout.
6. The application processes the payment session and creates the order.
7. Customer is redirected to the success page.
8. Customer can view the order in their personal order history.

### Payment Redirect Configuration

The backend uses the frontend URL to configure Stripe success and cancellation redirects.

Example:

```javascript
success_url:
    process.env.FRONTEND_URL +
    "/success?session_id={CHECKOUT_SESSION_ID}",

cancel_url:
    process.env.FRONTEND_URL + "/cart",
```

For production, configure `FRONTEND_URL` with the deployed frontend URL in Render.

The frontend deployment must also support React single-page application routing so that routes such as `/success` work when opened directly or refreshed.

For example, configure a Render Static Site rewrite:

| Source | Destination | Action |
|---|---|---|
| `/*` | `/index.html` | Rewrite |

Use Stripe test-mode credentials when testing payments locally.

---

## 📦 Order Management and My Orders

The application supports customer-specific order management.

### Order Workflow

1. Customer registers an account.
2. Customer logs in.
3. Customer selects food items.
4. Customer completes checkout.
5. Backend creates the order.
6. Order information is saved in MongoDB.
7. Order is associated with the authenticated customer's user ID.
8. Customer opens the My Orders page.
9. Backend retrieves orders belonging to that customer.
10. Customer can view previous orders and individual order details.

### My Orders API

```text
GET /api/v1/eats/orders/me/myOrders
```

This endpoint retrieves the authenticated customer's order history.

The backend must authenticate the customer before returning their orders and must ensure that one customer cannot access another customer's private order history.

---

## 🔗 API Endpoints

Some API endpoints used by the application include:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/v1/users/signup` | Register a new user |
| POST | `/api/v1/users/login` | Authenticate a user |
| GET | `/api/v1/users/me` | Get authenticated user details |
| POST | `/api/v1/users/logout` | Log out a user |
| POST | `/api/v1/eats/orders/new` | Create an order |
| GET | `/api/v1/eats/orders/me/myOrders` | Get customer orders |
| GET | `/api/v1/eats/orders/:id` | Get order details |
| POST | `/api/v1/payment/process` | Create payment session |

Additional endpoints are available for restaurants, food items, cart management, coupons, and user management.

*Note: Confirm the exact HTTP methods and route paths in the backend route files before using this table as API documentation.*

---

## 🚀 Deployment on Render

The application is deployed using separate Render services.

### Frontend Deployment

Frontend service URL:

```text
https://food-order-website-gmc8.onrender.com
```

Typical frontend deployment configuration:

| Setting | Value |
|---|---|
| Service Type | Static Site |
| Root Directory | `frontend` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `build` |

Configure the frontend API environment variable using the actual variable name expected by the frontend:

```env
REACT_APP_API_URL=https://food-order-backend-yg6r.onrender.com
```

If the frontend is configured with a different environment variable name, use that exact name instead.

After changing frontend environment variables, rebuild and redeploy the frontend.

### Backend Deployment

Backend service URL:

```text
https://food-order-backend-yg6r.onrender.com
```

Typical backend deployment configuration:

| Setting | Value |
|---|---|
| Service Type | Web Service |
| Root Directory | `Backend-obfuscated` |
| Build Command | `npm install` |
| Start Command | `npm start` |

Configure the backend environment variables in the Render dashboard.

Important production configuration:

```env
NODE_ENV=production
FRONTEND_URL=https://food-order-website-gmc8.onrender.com
```

Also configure the required MongoDB, JWT, Stripe, Cloudinary, and email credentials.

### Deployment Checklist

- Configure the correct frontend and backend URLs.
- Configure production environment variables.
- Configure backend CORS for the exact frontend origin.
- Enable credential-based CORS requests.
- Configure secure production authentication cookies.
- Configure frontend Axios credentials.
- Verify MongoDB connectivity.
- Verify Stripe configuration.
- Configure frontend SPA rewrites.
- Redeploy the frontend after frontend environment changes.
- Redeploy the backend after backend code or environment changes.

---

## 🧪 Testing and Troubleshooting

The application should be tested using both normal and Incognito browser windows.

### 1. Registration and Login

- Register a new customer.
- Verify that the account is created successfully.
- Log in using the registered credentials.
- Check the login response in Chrome Developer Tools.

### 2. Authentication Persistence

- Log in successfully.
- Refresh the website.
- Verify that the user remains authenticated.
- Check the `/api/v1/users/me` request.
- Verify that the authentication cookie is included in the request.

### 3. My Orders

- Log in as a customer.
- Place an order.
- Open My Orders.
- Verify that the newly placed order is displayed.
- Refresh the page.
- Verify that the order history is still available.

### 4. CORS Errors

If the browser displays:

```text
No 'Access-Control-Allow-Origin' header is present
```

Check:

- Backend CORS origin.
- Frontend deployment URL.
- Credential configuration.
- CORS middleware placement.
- Backend deployment status.
- Network and server errors.

### 5. Authentication Cookie Errors

If the browser displays:

```text
Set-Cookie was blocked due to user preferences
```

Check:

- `NODE_ENV=production`.
- `Secure` cookie attribute.
- `SameSite=None` cookie attribute for cross-site requests.
- `HttpOnly` cookie attribute.
- Chrome third-party cookie settings.
- Whether the cookie is stored after login.
- Whether the cookie is sent with `/api/v1/users/me`.

### 6. Stripe Redirect Errors

If the Stripe payment redirect opens an incorrect URL:

- Verify the backend `FRONTEND_URL`.
- Verify the Stripe Checkout success URL.
- Verify the cancellation URL.
- Check the frontend `/success` route.
- Check the Render Static Site rewrite configuration.

### 7. Network Debugging

Use Chrome Developer Tools:

1. Press `F12`.
2. Open the Network tab.
3. Find the failed API request.
4. Inspect the request URL.
5. Inspect the status code.
6. Check Request Headers.
7. Check Response Headers.
8. Inspect Console errors.

---

## 🔒 Security

Security is important for this application.

- Store sensitive credentials in environment variables.
- Never expose Stripe secret keys in frontend code.
- Use HTTP-only authentication cookies.
- Use secure cookies in production.
- Configure CORS with trusted frontend origins.
- Hash passwords using bcrypt.
- Validate user input on the backend.
- Protect private API routes using authentication middleware.
- Ensure customers can access only their own orders.
- Keep dependencies updated.
- Review security vulnerabilities regularly.
- Never commit `.env` files or production credentials to GitHub.

For security-related information and responsible vulnerability disclosure, refer to [SECURITY.md](./SECURITY.md).

---

## 👨‍💻 Author

**Vijay Kumar Pappala**

GitHub: [VijayKumar203](https://github.com/VijayKumar203)

Project Repository: [FoodOrder-Project](https://github.com/VijayKumar203/FoodOrder-Project)

---

## 📄 License

This project currently uses the license specified in the project repository's package configuration. Refer to the repository for licensing details.

---

⭐ If you find this project useful, consider giving the repository a star!