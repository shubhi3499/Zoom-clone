# Zoom-Clone 🎥

A full-stack video conferencing application inspired by Zoom.  
This project uses the **MERN stack**, **WebRTC**, **Sockets**, and **TCP/UDP protocols** to enable real-time video, audio, and data communication between multiple participants.

---

## 🚀 Live Demo

Try the app here:  
👉 [Zoom-Clone on Render](https://videocall-frontend-7hpw.onrender.com)

---

## 📌 Features

- 🔐 User Authentication (Signup/Login)  
- 🎥 Real-time audio & video calls using **WebRTC**  
- 🟢 Multi-participant support via **WebSockets**  
- 🌐 Built on **TCP/UDP protocols** for reliable + fast communication  
- 💬 Chat messaging inside the meeting room
- 🖥️ Screen sharing support
- 📱 Responsive UI for desktop & mobile  
- 🖥️ Create or join rooms with a unique ID  

---

## 🛠️ Tech Stack

| Layer         | Technologies |
|---------------|--------------|
| **Frontend**  | React.js, CSS, WebRTC APIs |
| **Backend**   | Node.js, Express.js |
| **Database**  | MongoDB |
| **Sockets**   | Socket.IO (over TCP/UDP) |
| **Protocols** | TCP, UDP, WebRTC DataChannels |
| **Deployment**| Render |

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1️⃣ Prerequisites
Make sure you have installed:
- Node.js (>= 16.x recommended)  
- npm or yarn  
- MongoDB (local or Atlas cluster)  

### 2️⃣ Installation

Install backend dependencies:
cd backend
npm install

Install frontend dependencies:
cd ../frontend
npm install

3️⃣ Setup Environment Variables

Create a .env file in the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Create a .env file in the frontend folder:
REACT_APP_BACKEND_URL=http://localhost:5000

4️⃣ Running the Application

Run backend server:
cd backend
npm start

Run frontend:
cd ../frontend
npm start



###Project Structure
Zoom-clone/
├── backend/
│   ├── server.js        # Express + Socket.IO server
│   ├── routes/          # API routes
│   ├── models/          # MongoDB models
│   ├── controllers/     # Logic for auth, rooms, etc.
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # UI Pages
│   │   └── App.js
│   └── package.json
└── README.md


###Future Improvements
📑 Meeting recording
🎙️ Background noise suppression
🔒 End-to-end encryption for calls


👨‍💻 Author
Developed by **Shubham Zawar**
Feel free to connect if you have ideas or suggestions!

