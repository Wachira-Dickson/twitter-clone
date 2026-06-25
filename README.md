# Twitter Clone
<img width="1693" height="870" alt="image" src="https://github.com/user-attachments/assets/d2213f85-8b19-426a-bb52-d09c9fffe448" />


A full-stack Twitter/X clone built with React, Node.js, Express, and MongoDB. 
The application allows users to create accounts, authenticate securely, create posts, follow other users, receive notifications, and manage their profiles.

## Features

* User Authentication (Login/Register)
* JWT-based Authorization
* Create, Edit, and Delete Posts
* Like and Comment on Posts
* Follow and Unfollow Users
* User Profile Management
* Profile Image Updates
* Notifications System
* Responsive User Interface
* Protected Routes
* MongoDB Database Integration

---

## Tech Stack

### Frontend

* React.js
* React Router
* Context API
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

## Project Structure

```bash
twitter-clone/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── skeletons/
│   │   │   └── svgs/
│   │   │
│   │   ├── hooks/
│   │   │   ├── useFollow.jsx
│   │   │   └── useUpdateUser.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── NotificationsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── modals/
│   │   │   └── EditProfileModal.jsx
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   ├── user.controller.js
│   │   └── notification.controller.js
│   │
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   │   └── protectRoute.js
│   │
│   ├── lib/
│   │   └── generateToken.js
│   │
│   ├── db/
│   │   └── connectMongoDB.js
│   │
│   └── server.js
│
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone
```

### 2. Backend Setup

Initialize the project:

```bash
npm init -y
```

Install dependencies:

```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv cors cookie-parser cloudinary
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

---

## Environment Variables

### Backend

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## Future Improvements

* Bookmark posts
* Trending topics
* Media uploads
* Dark/Light theme toggle

---
## License

This project is for educational purposes and personal learning.

---

## Author

Dickson Wachira

GitHub: https://github.com/Wachira-Dickson
