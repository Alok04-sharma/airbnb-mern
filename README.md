🏠 Airbnb Clone — Full Stack MERN Application

A full-stack property rental web application inspired by Airbnb.
Users can register, create property listings, upload images, browse available places, and view detailed listing pages.

This project demonstrates a complete client-server architecture with authentication, REST APIs, database integration and protected routes.

---

🔗 Project Overview

The application allows hosts to publish rental properties and visitors to explore available listings.
The backend exposes REST APIs built with Express, while the frontend consumes those APIs using React.

Main workflow:

1.⁠ ⁠User registers or logs in
2.⁠ ⁠Host creates a property listing
3.⁠ ⁠Images are uploaded and stored
4.⁠ ⁠Listings are fetched from database
5.⁠ ⁠Users can open a detailed property page

---

✨ Features

Authentication

•⁠  ⁠Secure user registration and login
•⁠  ⁠Password protection using hashing
•⁠  ⁠Session/JWT based authentication
•⁠  ⁠Protected routes (only logged-in users can create listings)

Listings

•⁠  ⁠Create new property
•⁠  ⁠Edit existing listing
•⁠  ⁠Delete listing
•⁠  ⁠View all listings on homepage
•⁠  ⁠Detailed listing page

Media

•⁠  ⁠Property image upload support
•⁠  ⁠Stored and retrieved dynamically

UI

•⁠  ⁠Responsive layout (mobile + desktop)
•⁠  ⁠Clean card-based property display
•⁠  ⁠Navigation bar and forms

---

🧱 Tech Stack

Frontend

•⁠  ⁠React.js
•⁠  ⁠Vite
•⁠  ⁠Tailwind CSS
•⁠  ⁠Axios (API communication)

Backend

•⁠  ⁠Node.js
•⁠  ⁠Express.js
•⁠  ⁠REST API architecture

Database

•⁠  ⁠MongoDB
•⁠  ⁠Mongoose ODM

---


⚙️ How to Run Locally

1.⁠ ⁠Clone the repository

git clone https://github.com/Alok04-sharma/airbnb-mern.git
cd airbnb-mern

---

2.⁠ ⁠Backend Setup

cd backend
npm install

Create a ".env" file inside the backend folder (see Environment Variables section below), then run:

npm start

Backend will start on:

http://localhost:8000   (or your configured port)

---

3.⁠ ⁠Frontend Setup

Open a new terminal:

cd frontend
npm install
npm run dev

Frontend will run on:

http://localhost:5173

Open the browser and the application should be working.

---

🔐 Environment Variables

This project uses environment variables to keep sensitive data secure.
The ".env" file is NOT uploaded to GitHub for security reasons.

Create a file:

backend/.env

Add the following variables (example format):

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Why this is required

•⁠  ⁠"PORT" → backend server port
•⁠  ⁠"MONGO_URI" → connects application to MongoDB database
•⁠  ⁠"JWT_SECRET" → used to sign authentication tokens securely

Anyone running the project must create their own ".env" file with their own database credentials.

---

🧪 API Architecture

The backend follows REST principles:

•⁠  ⁠GET    → fetch listings
•⁠  ⁠POST   → create listing
•⁠  ⁠PUT    → update listing
•⁠  ⁠DELETE → remove listing

All database operations are handled through Mongoose models.

---

👨‍💻 Author

Alok Sharma

Full Stack Developer (MERN)
