import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import { createTask } from "../controllers/task.controller.js";

const taskRoute = Router()

// POST /api/tasks
taskRoute.post("/", requireAuth, createTask)

export default taskRoute