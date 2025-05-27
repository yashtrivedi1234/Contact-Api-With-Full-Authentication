## Contact Api With Full Authentication
A RESTful API built with Node.js, Express, and MongoDB to manage user contacts. It allows users to register, login, and perform CRUD operations on contacts with full authentication and authorization.

## Live Link: https://contact-api-with-full-authentication-wv2w.onrender.com

⸻

## Features
 - ✂️ User registration and login with secure password hashing.
- 📋 JWT-based authentication and authorization.
- 📱 Create, read, update, and delete contacts.
- 📸 Fetch all contacts or user-specific contacts.
- 🎨 Input validation and robust error handling.
- 🔁 Modular and scalable backend architecture.	

⸻

## Technologies Used

 - **Node.js** — JavaScript runtime environment.
- **Express** — Web framework for Node.js.
- **MongoDB** — NoSQL database to store users and contacts.
- **Mongoose** — ODM for MongoDB schema modeling.
- **bcryptjs** — Password hashing.
- **jsonwebtoken** — JWT creation and verification for auth.
- **dotenv** — Environment variable management.
- **cors** — Middleware for Cross-Origin Resource Sharing.

⸻

## API Endpoints Overview

## Method	Endpoint	Description	Auth Required

| Method | Endpoint                    | Description                  | Auth Required |
|--------|-----------------------------|------------------------------|---------------|
| POST   | /api/user/register          | Register a new user          | No            |
| GET    | /api/user/login             | Login and get JWT token      | No            |
| GET    | /api/contact/               | Get all contacts             | No            |
| GET    | /api/contact/userid/:id     | Get contacts by user ID      | No            |
| GET    | /api/contact/:id            | Get contact by contact ID    | No            |
| POST   | /api/contact/new            | Create new contact           | Yes           |
| PUT    | /api/contact/put/:id        | Update contact by ID         | Yes           |
| DELETE | /api/contact/delete/:id     | Delete contact by ID         | Yes           |

## Testing
- Use Thunder Client or Postman to test the API endpoints.
- Include the JWT token in Authorization header for protected routes in the format:

⸻

## Screenshots
<img width="1470" alt="Screenshot 2025-05-27 at 8 38 09 PM" src="https://github.com/user-attachments/assets/7dd7f440-e728-4a55-9401-c73cf15de62e" />

⸻

## Demo Video

⸻
