💬 React Firebase Chat App
A real-time chat application built using React and Firebase, enabling users to join chat rooms and exchange messages instantly. It features Google authentication, real-time Firestore messaging, and persistent chat histories for seamless communication.

✨ Features
🔐 Google Authentication
Secure sign-in using Google accounts with Firebase Auth.

💬 Real-time Messaging
Messages appear instantly for all users in the same chat room, powered by Firebase Firestore.

🏠 Chat Room Management
Users can create or join custom chat rooms. Each room holds its own conversation thread.

🧠 Message Persistence
All chats are stored in Firestore, ensuring they remain available even after reload or logout.

📱 Responsive Design
Works well across desktop and mobile devices.

🧰 Technologies Used

Technology	Purpose
React	Frontend UI framework
Firebase Auth	Google Sign-in & user session handling
Firestore	Real-time NoSQL database for storing messages
React Router	Navigation between login, rooms, and chats
Tailwind CSS / CSS	UI styling and layout
🚀 Getting Started
🔧 Prerequisites
Node.js

Firebase project (with Authentication + Firestore enabled)

🛠️ Setup Instructions
bash
Copy
Edit
# Clone the repository
git clone https://github.com/deekshitha430/react_chatApp.git
cd react_chatApp

# Install dependencies
npm install

# Configure Firebase
# Create a `.env` file and add your Firebase credentials:
# REACT_APP_API_KEY=xxx
# REACT_APP_AUTH_DOMAIN=xxx
# REACT_APP_PROJECT_ID=xxx
# (etc.)

# Start the app
npm start
📁 Folder Structure
arduino
Copy
Edit
src/
├── components/
│   ├── ChatRoom.js
│   ├── Message.js
│   └── SignIn.js
├── App.js
├── firebase-config.js
└── index.js
