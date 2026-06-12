import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const authRoute = Router()

// POST /api/auth/register
authRoute.post('/register', register)

// POST /api/auth/login
authRoute.post('/login', login)

export default authRoute