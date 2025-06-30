<h1 align="center">🔗 URL Shortener</h1>

<p align="center">
A minimal and efficient URL Shortening service built with <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.<br>
Generate short URLs, track visits, and redirect instantly.
</p>

---

## 🚀 Features

-  **Create short URLs** from long links
-  **Redirect** to original URLs using short links
-  **Track clicks** with timestamps (basic analytics)
-  Clean and modular file structure

---

## 🛠️ Tech Stack

- ⚙️ Node.js
- 🚀 Express.js
- 🧠 MongoDB + Mongoose
- 🧩 shortid (for unique link generation)
- 📬 Postman (for testing APIs)

---

## 📁 Project Structure
  ```bash
    url-shortener/
    ├── controllers/
    │ └── url.js # Logic for creating and tracking URLs
    ├── models/
    │ └── url.js # Mongoose schema for URL data
    ├── routes/
    │ └── url.js # Express route handlers
    ├── connect.js # MongoDB connection setup
    ├── index.js # Main server file
    └── README.md # You're here!
```


⚙️ Installation

### 1. Clone the repository
```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
```

### 2. Install dependencies
```bash
    npm install
```

### 3. Start MongoDB locally
Make sure MongoDB is running on your machine.

### 4. Run the server
```bash
    nodemon index.js
 ```

Server will start on:
http://localhost:8001



## 🧪 API Endpoints

### 📌 POST `/url`

**Create a short URL**
Body(JSON):
  ```bash
      {
  "url": "https://example.com"
      }
```
Response:
```bash
    {
  "id": "short123"
    }
```

###🔁 GET /:shortId
Redirects to the original URL.
Example:
http://localhost:8001/abc123 → redirects to https://www.example.com

### 📊 GET /url/analytics/:shortId
Returns number of visits and timestamp log.
```bash
{
  "totalClicks": 2,
  "analytics": [
    { "timestamp": 1719838810201 },
    { "timestamp": 1719838855509 }
  ]
}
```
### 💡 Future Ideas
- Expiry support for links
- User login system
- Dashboard with graphs and charts
- QR code generation

### 👩‍💻 Author
Made with ❤️ by Charul192
Feel free to connect or contribute!
