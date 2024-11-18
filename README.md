Here is a comprehensive **README.md** for the RapidChat repository built using the MERN stack, Zustand for state management, and Socket.IO for real-time communication:

---

# RapidChat

## Introduction

**RapidChat** is a real-time chat application built on the MERN stack (MongoDB, Express, React, Node.js) with **Socket.IO** enabling instant messaging. The application uses **Zustand** for efficient state management, providing a responsive and scalable chat experience.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Environment Variables](#environment-variables)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Real-time Messaging**: Instant, bidirectional communication using Socket.IO.
- **State Management**: Zustand ensures efficient and scalable state handling for React components.
- **Authentication**: Secure user login with JWT-based access and refresh tokens.
- **Responsive UI**: A modern and user-friendly interface for seamless interaction.
- **Cross-Origin Support**: Configured CORS policies for secure communication between frontend and backend.

---

## Tech Stack

### Frontend:
- **React.js**: Building the user interface.
- **Zustand**: Lightweight state management.
- **Socket.IO Client**: Real-time updates and messaging.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Framework for handling server-side routes and middleware.
- **MongoDB**: Database for storing user data and chat logs.
- **Socket.IO**: Real-time communication engine.
- **JWT**: Authentication using JSON Web Tokens.

---

## Installation

### Prerequisites:
- Node.js (v14 or higher)
- MongoDB (running locally or hosted)
- npm or yarn

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MohsinDodhiya/RapidChat.git
   cd RapidChat
   ```

2. Install dependencies:
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

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following:
   ```plaintext
   PORT=5000
   MONGO_DB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
   ```

4. Start the application:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

---

## Usage

1. Open the application in your browser (`http://localhost:3000` by default).
2. Sign up or log in with a user account.
3. Start chatting with other users in real-time!

---

## Environment Variables

| Key                     | Description                  |
|-------------------------|------------------------------|
| `PORT`                 | Server listening port       |
| `MONGO_DB_URI`         | MongoDB connection string   |
| `JWT_SECRET`           | Secret for signing JWTs     |
| `REFRESH_TOKEN_SECRET` | Secret for refresh tokens    |

---

## Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

This README covers the core functionality and setup of RapidChat. If you have further questions or need clarification, let me know!
