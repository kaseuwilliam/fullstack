# 💰 Social Finance Club

## Project Overview

Social Finance Club is a full-stack web application built with React for the frontend and Node.js/Express for the backend. It features user authentication, blog posting, and viewing capabilities. The application uses PostgreSQL as its database, managed through Sequelize ORM.

## Features

- User registration and login with JWT authentication
- Blog posting and viewing
- Secure password hashing with bcrypt
- Protected routes for authenticated users
- Database seeding for initial data population

## Tech Stack

- Frontend: React, React Router
- Backend: Node.js, Express
- Database: PostgreSQL
- ORM: Sequelize
- Authentication: JSON Web Tokens (JWT), bcrypt

## Project Structure

```
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   │   └── connect.js
│   │   ├── Home.js
│   │   └── Blogs.js
│   └── ...
├── backend/
│   ├── controllers/
│   │   ├── blogController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── blogModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── database.js
│   └── seeders/
│       ├── blogs.js
│       └── users.js
└── ...
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/social-finance-club.git
   cd social-finance-club
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up your PostgreSQL database and update the connection details in `backend/config/database.js`.

4. Set up your environment variables:
   Create a `.env` file in the backend directory and add:
   ```
   ACCESS_TOKEN_SECRET=your_secret_key_here
   ```

5. Initialize the database and run seeders:
   ```
   node backend/models/init.js
   node backend/seeders/index.js
   ```

6. Start the backend server:
   ```
   cd backend && npm start
   ```

7. In a new terminal, start the frontend development server:
   ```
   cd frontend && npm start
   ```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- POST `/api/user/signup`: Register a new user
- POST `/api/user/login`: Login a user
- GET `/api/blog`: Get all blogs (protected route)
- GET `/api/blog/:id`: Get blogs by user ID (protected route)

## Future Improvements

- Add blog creation, editing, and deletion functionality
- Implement user profiles
- Add comment system for blogs
- Improve error handling and user feedback
- Implement password reset functionality
- Add social sharing features for blogs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

Happy coding! 📊💻
