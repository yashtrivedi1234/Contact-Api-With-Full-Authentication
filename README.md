
⸻

## Contact API

## Live Link: https://contact-api-with-full-authentication-wv2w.onrender.com

A RESTful API built with Node.js, Express, and MongoDB to manage user contacts. It allows users to register, login, and perform CRUD operations on contacts with full authentication and authorization.

⸻

## Features
	•	User registration and login with secure password hashing.
	•	JWT-based authentication and authorization.
	•	Create, read, update, and delete contacts.
	•	Fetch all contacts or user-specific contacts.
	•	Input validation and robust error handling.
	•	Modular and scalable backend architecture.

⸻

## Technologies Used
	•	Node.js — JavaScript runtime environment.
	•	Express — Web framework for building APIs.
	•	MongoDB — NoSQL database to store users and contacts.
	•	Mongoose — ODM for MongoDB schema modeling.
	•	bcryptjs — Password hashing.
	•	jsonwebtoken — JWT creation and verification for auth.
	•	dotenv — Environment variable management.
	•	cors — Middleware for Cross-Origin Resource Sharing.

⸻

## Setup & Installation
	1.	Clone the repository:

git clone https://github.com/yourusername/contact-api.git
cd contact-api


	2.	Install dependencies:

npm install


	3.	Configure environment variables:
Create a .env file in the root folder with the following keys:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT=your_jwt_secret_key


	4.	Start the server:

npm start


	5.	Open your API client (e.g., Postman or Thunder Client) and test endpoints at:

http://localhost:5000/api/



⸻

## API Endpoints Overview

Method	Endpoint	Description	Auth Required
POST	/api/user/register	Register a new user	No
POST	/api/user/login	Login user and get JWT token	No
GET	/api/contact/	Get all contacts	No
GET	/api/contact/userid/:id	Get contacts by user ID	No
GET	/api/contact/:id	Get contact by contact ID	No
POST	/api/contact/new	Create new contact	Yes
PUT	/api/contact/put/:id	Update contact by ID	Yes
DELETE	/api/contact/delete/:id	Delete contact by ID	Yes


⸻

Testing
	•	Use Thunder Client or Postman to test the API endpoints.
	•	Include the JWT token in Authorization header for protected routes in the format:

Authorization: Bearer <your_jwt_token_here>



⸻

Screenshots & Videos

Screenshots

Example of a successful API response.

Testing create contact endpoint in Postman.

Demo Video

Click the image to watch a demo of the API in action.

⸻

License

This project is licensed under the MIT License.

⸻

Aap apne screenshots screenshots folder me daal kar path accordingly update kar sakte hain. Video ke liye YouTube link ya koi external hosting link add kar sakte hain.

Kya aap chahenge main aapke liye ye README file poori tarah banakar save kar doon?
