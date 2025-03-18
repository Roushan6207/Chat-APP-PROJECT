# 📩 Real-Time Chat Application

A full-stack real-time messaging application built using the MERN stack, Socket.io, and TailwindCSS, offering seamless and interactive messaging features.

## 🚀 Features

- **Real-time Messaging**: Instant communication with Socket.io.
- **Authentication & Authorization**: Secure user authentication using JWT.
- **Online User Status**: See which users are currently online.
- **Global State Management**: Powered by Zustand for efficient state handling.
- **Error Handling**: Robust error management on both client and server.
- **Modern UI/UX**: Styled with TailwindCSS and Daisy UI for a sleek experience.
- **Deployment**: Guide to deploying the app for free!

## 🛠 Tech Stack

- **Frontend**: React, Zustand, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express, MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB with Mongoose

## 📷 Screenshots
## Account Create Page
![Image Description](https://github.com/Roushan6207/Chat-APP-PROJECT/blob/4763d46f77e5cfeb72a08743eefc0dbfa8284de2/image1.png)

## Login Page
![Image Description](https://github.com/Roushan6207/Chat-APP-PROJECT/blob/d072625ef92af22f01d5370f39e40ff33d4dce8e/image2.png)

## Chat Page
![Image Description](https://github.com/Roushan6207/Chat-APP-PROJECT/blob/d072625ef92af22f01d5370f39e40ff33d4dce8e/image3.png)

## Profile Page
![Image Description](https://github.com/Roushan6207/Chat-APP-PROJECT/blob/d072625ef92af22f01d5370f39e40ff33d4dce8e/image4.png)

## Setting Page
![Image Description](https://github.com/Roushan6207/Chat-APP-PROJECT/blob/d072625ef92af22f01d5370f39e40ff33d4dce8e/image5.png)

## 📦 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `server` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   ```

4. **Run the Application**
   ```bash
   # Start backend
   cd server
   npm start

   # Start frontend
   cd client
   npm start
   ```

5. **Access the App**
   Open `http://localhost:3000` in your browser.

## 📡 WebSocket Communication

- Uses `Socket.io` for real-time message delivery.
- Handles user connection, disconnection, and online status updates.

## 🛠 API Endpoints

| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| POST   | /api/auth/register | Register new user     |
| POST   | /api/auth/login    | User login           |
| GET    | /api/users        | Get all users        |
| GET    | /api/messages/:id | Fetch messages       |
| POST   | /api/messages     | Send a new message   |

## 🚀 Deployment

- **Frontend**: Deploy on Vercel or Netlify
- **Backend**: Deploy on Render or Railway
- **Database**: Use MongoDB Atlas for cloud database

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 💡 Learnings

- Full-stack development with **MERN**
- WebSockets and **real-time communication**
- Authentication with **JWT**
- State management with **Zustand**
- Deploying a full-stack app for **free**

---

🔥 **Happy Coding!** 🚀
