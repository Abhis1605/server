import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import { createTask, getTasks, updateTask } from "../controllers/task.controller.js";

const taskRoute = Router()

// POST /api/tasks
taskRoute.post("/", requireAuth, createTask)

// GET /api/tasks -- users get there userid related tasks only
taskRoute.get('/', requireAuth, getTasks)

// PATCH /api/tasks/:id -- to update based on id
taskRoute.patch('/:id', requireAuth, updateTask)

export default taskRoute