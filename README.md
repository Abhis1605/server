# Task Manager Backend

## About

This is a simple backend for a task manager project.
It handles user login, authentication, and task operations.

---

## Tech Used

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcryptjs (for password hashing)
* uuid (for unique ids)
* dotenv (for env variables)
* cors

---

## Setup

1. Install dependencies:

```
npm install
```

2. Create `.env` file:

```
PORT=8000
JWT_SECRET=your_secret_key
```

3. Run server:

For development:

```
npm run dev
```

For production:

```
npm start
```

---

## Project Structure

```
src/
  controllers/
  routes/
  middlewares/
  utils/
  config/

data/
  users.json
  tasks.json
```

---

## How it Works

* Users can register and login
* Password is stored in hashed format
* JWT token is generated after login
* Token is used for protected routes
* Tasks are stored in JSON file

---

## Scripts

```
npm run dev    -> run with nodemon
npm start      -> run server
```

---

## Notes

* No database is used (JSON file used)
* Token is required for task APIs
* Admin is created when server starts
