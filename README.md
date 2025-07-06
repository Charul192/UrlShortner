<h1 align="center">🔗 URL Shortener with User Auth</h1>

<p align="center">
A secure, efficient URL Shortening service built using <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, and <b>EJS</b>. Supports user authentication, individual URL tracking, and real-time analytics.
</p>

---

## 🚀 Features

- ✅ **User Authentication** (Sign up & Login)
- 🔐 **Only logged-in users** can shorten URLs
- ✂️ **Generate short URLs** from long links
- 🔁 **Redirect** using short links
- 📈 **Click tracking** with timestamps (basic analytics)
- 📋 **User-specific dashboard** (view only your own shortened URLs)
- 🧼 Clean and modular code structure with EJS frontend

---

## 🛠️ Tech Stack

- ⚙️ Node.js
- 🚀 Express.js
- 🧠 MongoDB + Mongoose
- ✏️ EJS (templating engine)
- 🧩 shortid (for generating short links)
- 🍪 cookie-parser (for managing sessions)

---

## 📁 Project Structure

```bash
url-shortener/
├── controllers/
│   ├── url.js          # Logic for URL creation and analytics
│   └── user.js         # Logic for signup & login
├── models/
│   ├── url.js          # URL schema
│   └── user.js         # User schema
├── routes/
│   ├── url.js          # Routes for URL actions
│   ├── user.js         # Routes for signup/login
│   └── staticroute.js  # Views like home, login, signup
├── middlewares/
│   └── auth.js         # Auth protection middleware
├── service/
│   └── auth.js         # Simple in-memory session logic
├── views/
│   ├── home.ejs        # Main dashboard
│   ├── login.ejs       # Login page
│   └── signup.ejs      # Signup page
├── connect.js          # MongoDB connection
├── index.js            # Main Express server
└── README.md           # You're here!
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Charul192/UrlShortner.git
cd UrlShortner
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start MongoDB locally
In the index.js file, you'll find this line:
```bash
connectToMongoDB("<your-host>:<port>/<your-database-name>").then(() => console.log("MongoDB connected"));
```
Replace it with your own MongoDB connection string.

### 4. Start the server
```bash
nodemon index.js
```

Server runs at: http://localhost:8001

---

## 🧪 API Endpoints
### 🔐 User
### ✅ POST /user
Register a new user
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
### 🔓 POST /user/login
Login existing user
Body:
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
## ✂️ URL
### 📌 POST /url
Create a short URL (only for logged-in users)
Body:
```json
{
  "url": "https://example.com"
}
```
Response:
```json
{
  "id": "short123"
}
```

### 🔁 GET /:shortId
Redirects to the original URL
Example:
http://localhost:8001/abc123 → https://www.example.com

### 📊 GET /url/analytics/:shortId
Returns number of visits and timestamp logs
Example:
```json
{
  "totalClicks": 2,
  "analytics": [
    { "timestamp": 1719838810201 },
    { "timestamp": 1719838855509 }
  ]
}
```
## 🔐 Authentication & Authorization
- Routes under /url are protected using middleware
- Users can only view their own shortened URLs on the dashboard
- Uses basic cookie-based sessions


## 📸 Screenshot
![image](https://github.com/user-attachments/assets/8a90869e-84ef-4264-a5ff-64c9466aaa7a)
🔗 Simple UI to generate and view short URLs  
📊 Click count tracking displayed in a clean table layout

---

## 💡 Future Scope
- 🔁 Expiry support for short links
- 📊 Graphical analytics (charts for visits)
- 📸 QR code generation
- 📬 Email verification
- 🔐 Password hashing (currently passwords are stored as plain text)
 
---

## 👩‍💻 Author
- Made with ❤️ by Charul192
- Feel free to fork, clone, or contribute!
