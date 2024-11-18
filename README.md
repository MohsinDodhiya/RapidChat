---

# 🌟 RapidChat 🚀

**Real-Time Chat Application** built on the **MERN Stack** with 🔗 **Socket.IO** for instant messaging and 🌀 **Zustand** for efficient state management.  

✨ Experience seamless, real-time communication with a user-friendly interface!  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-blue?style=for-the-badge&logo=heroku)](https://your-live-demo-link.com)  
[![GitHub Issues](https://img.shields.io/github/issues/MohsinDodhiya/RapidChat?style=for-the-badge)](https://github.com/MohsinDodhiya/RapidChat/issues)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)  

---

## 🚀 Features

✅ **Real-Time Messaging**: Instant communication with Socket.IO.  
✅ **Global State Management**: Scalable, lightweight state management using Zustand.  
✅ **Authentication**: Secure login with JWT tokens (access & refresh).  
✅ **Responsive Design**: Optimized for desktop and mobile devices.  
✅ **Easy Deployment**: Backend powered by Node.js and Express, with MongoDB as the database.

---

Here's the revised section with improved phrasing and guidance for accessing the live demo link:

---

## 🌐 Live Demo

🖥️ **Explore RapidChat in Action**  
Experience the real-time chat features directly by accessing the live application:  
🔗 **[RapidChat Live](https://your-deployed-link.example.com)**

---

## 🛠️ Tech Stack

| Frontend ⚡️         | Backend 🔗             |
| -------------------- | ---------------------- |
| **React.js**         | **Node.js**            |
| **Zustand**          | **Express.js**         |
| **Socket.IO Client** | **Socket.IO**          |
| **CSS/Tailwind**     | **MongoDB**            |
| **JWT Auth**         | **JWT Authentication** |

---

## 📦 Installation and Setup

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local or hosted)
- **npm** or **yarn**

### Steps to Get Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MohsinDodhiya/RapidChat.git
   cd RapidChat
   ```

2. **Install Dependencies**

   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure Environment Variables**  
   Create a `.env` file in the `backend` directory:

   ```plaintext
   PORT=5000
   MONGO_DB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   REFRESH_TOKEN_SECRET=<your-refresh-secret>
   ```

4. **Run the Application**

   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```

5. **Open in Browser**  
   Navigate to `http://localhost:5473`.

---

## 📖 How It Works

- **Authentication**:  
  Users log in securely with JWT-based access and refresh tokens.
- **Real-Time Messaging**:  
  Messages are instantly sent and received using Socket.IO.
- **State Management**:  
  Zustand ensures smooth and scalable state management for all user interactions.
- **Database**:  
  Chat histories and user data are stored in MongoDB.

---

## 🎨 User Interface

### 🖥️ Desktop View

![Desktop Chat UI](https://via.placeholder.com/800x400?text=Chat+Desktop+UI)

### 📱 Mobile View

![Mobile Chat UI](https://via.placeholder.com/400x800?text=Chat+Mobile+UI)

---

## 📂 Project Structure

```plaintext
RapidChat/
│
├── backend/                 # Node.js backend
│   ├── controllers/         # API controllers
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   └── server.js            # Main server file
│
├── frontend/                # React frontend
│   ├── components/          # Reusable components
│   ├── pages/               # Application pages
│   └── App.js               # Root React component
│
└── .env                     # Environment variables
```

---

## 🛡️ Environment Variables

| Key                    | Description                   |
| ---------------------- | ----------------------------- |
| `PORT`                 | Backend server port           |
| `MONGO_DB_URI`         | MongoDB connection string     |
| `JWT_SECRET`           | JWT secret for signing tokens |
| `REFRESH_TOKEN_SECRET` | Secret for refresh tokens     |

---

## ❤️ Contributors

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of your changes.

---

## 📝 License

This project is licensed under the **MIT License**.  
See the [LICENSE](https://github.com/MohsinDodhiya/RapidChat/blob/main/LICENSE) file for details.

---

🌟 **Enjoy using RapidChat!** Connect with others in real time!

---

Would you like specific deployment instructions (e.g., for Heroku, Vercel, or another platform)?
