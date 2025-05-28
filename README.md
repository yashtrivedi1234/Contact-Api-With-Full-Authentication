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
| PUT    | /api/contact/:id        | Update contact by ID         | Yes           |
| DELETE | /api/contact/:id     | Delete contact by ID         | Yes           |

## Testing
- Use Thunder Client or Postman to test the API endpoints.
- Include the JWT token in Authorization header for protected routes in the format:
- Key: Authorization
- Value: Login Token (You get when you successfully login)

⸻

## Screenshots
⸻

## Register a new user 
<img width="1470" alt="Screenshot 2025-05-28 at 10 13 14 PM" src="https://github.com/user-attachments/assets/5e9c1ca4-af3e-4f56-a288-97ec98095944" />

⸻

## Login and get JWT token
<img width="1470" alt="Screenshot 2025-05-28 at 10 19 54 PM" src="https://github.com/user-attachments/assets/fe5bc3b8-3b6c-491f-99e2-75e50b69aeb4" />

⸻

## Get All Contacts
<img width="1470" alt="Screenshot 2025-05-28 at 11 10 29 PM" src="https://github.com/user-attachments/assets/20acae8f-76d4-45f7-92f5-c5a41c438cf9" />

⸻

## Get contacts by user ID
<img width="1470" alt="Screenshot 2025-05-28 at 11 25 21 PM" src="https://github.com/user-attachments/assets/fb493567-9497-408f-b484-102c2cd53795" />

⸻

## Get contact by contact ID
<img width="1470" alt="Screenshot 2025-05-28 at 10 31 13 PM" src="https://github.com/user-attachments/assets/ee43fee0-9485-446d-8eeb-2059b4780260" />

⸻

## Create new contact
<img width="1470" alt="Screenshot 2025-05-28 at 10 52 17 PM" src="https://github.com/user-attachments/assets/4c3229e5-9a54-4d87-a488-8ce13d4a9def" />

⸻

## Update contact by ID 
<img width="1470" alt="Screenshot 2025-05-28 at 11 14 48 PM" src="https://github.com/user-attachments/assets/551f388e-b1a5-4740-b7ad-d8f0aeb89480" />

⸻

## Delete contact by ID
<img width="1470" alt="Screenshot 2025-05-28 at 11 16 37 PM" src="https://github.com/user-attachments/assets/37c0fd0e-474d-46de-aa70-5ba13a329b2d" />

⸻
