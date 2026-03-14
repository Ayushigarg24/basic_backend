# 🚀 Basic Backend API

Basic Backend is a **Node.js backend project** that demonstrates how to build a structured server using **Express.js, MongoDB, and REST APIs**.  

The project focuses on implementing core backend concepts such as **API routing, authentication, middleware, and database operations**.

This project is part of my learning journey in **backend development and API design**.

---

## ✨ Features

- RESTful API architecture
- User authentication system
- Secure password hashing
- JWT-based authentication
- Middleware for route protection
- MongoDB database integration
- Error handling and validation

---

## 🛠️ Tech Stack

Backend  
- Node.js  
- Express.js  

Database  
- MongoDB  

Authentication  
- JWT (JSON Web Token)  
- bcrypt.js  

Tools  
- Git  
- Postman  

---

## 📂 Project Structure

```
basic_backend
│
├── controllers
├── models
├── routes
├── middleware
├── config
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ayushigarg24/basic_backend.git
```

---

### 2️⃣ Navigate into the project folder

```bash
cd basic_backend
```

---

### 3️⃣ Install dependencies

```bash
npm install
```

---

### 4️⃣ Configure environment variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 5️⃣ Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 Example API Endpoints

| Method | Endpoint | Description |
|------|------|-------------|
| POST | /api/register | Register new user |
| POST | /api/login | Login user |
| GET | /api/profile | Get user profile |

---

## 🧪 Testing APIs

You can test APIs using:

- **Postman**
- **Thunder Client (VS Code extension)**

---

## 📈 Future Improvements

- Add role-based authentication
- Add API documentation (Swagger)
- Implement rate limiting
- Add unit testing
- Improve logging system

---

## 👩‍💻 Author

**Ayushi Garg**

GitHub  
https://github.com/Ayushigarg24  


---

⭐ If you found this project helpful, consider giving it a **star**.
