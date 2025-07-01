<h1 align="center">🔗 URL Shortener</h1>

<p align="center">
A minimal and efficient URL Shortening service built with <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, and <b>EJS</b>.<br>
Generate short URLs, track visits, and get clean stats — all with a simple UI.
</p>

---

## 🚀 Features

- 🔹 Create short URLs from long links  
- 🔹 Redirect to original URLs using short IDs  
- 🔹 Track click counts and timestamp logs (basic analytics)  
- 🔹 EJS-powered front-end view with table listing  
- 🔹 Clean and modular file structure  

---

## 🛠️ Tech Stack

- ⚙️ Node.js  
- 🚀 Express.js  
- 🧠 MongoDB + Mongoose  
- 🧩 shortid (for generating unique short IDs)  
- 💻 EJS (templating engine)  
- 📬 Postman (for API testing)  

---

## 📁 Project Structure
```bash
url-shortener/
├── controllers/ # Logic for creating/tracking URLs
│ └── url.js
├── models/ # Mongoose schemas
│ └── url.js
├── routes/ # Express route handlers
│ ├── url.js
│ └── staticroute.js
├── views/ # EJS templates
│ └── home.ejs
├── connect.js # MongoDB connection setup
├── index.js # Main server file
├── package.json
└── README.md # You're here!
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

### 📌 POST `/url`
**Purpose:** Create a short URL  
**Request Body:**
```json
{
  "url": "https://www.example.com"
}
```
**Response**
```json
{
  "id": "abc123"
}
```

### 🔁 GET /:shortId
**Purpose**: Redirects to the original URL
**Example**:
http://localhost:8001/abc123 → redirects to https://www.example.com


### 📊 GET /url/analytics/:shortId
**Purpose**: Get number of clicks and timestamp logs
**Response**:
```json
{
  "totalClicks": 2,
  "analytics": [
    { "timestamp": 1719838810201 },
    { "timestamp": 1719838855509 }
  ]
}
```

---

## 📸 Screenshot
![image](https://github.com/user-attachments/assets/8a90869e-84ef-4264-a5ff-64c9466aaa7a)
🔗 Simple UI to generate and view short URLs  
📊 Click count tracking displayed in a clean table layout

---

## 💡 Future Scope
- ⏳ Expiry support for links
- 👤 User login & dashboard
- 📊 Graphs/charts for analytics
- 📷 QR code generation

---

## 👩‍💻 Author
- Made with ❤️ by Charul192
- Feel free to connect or contribute!
