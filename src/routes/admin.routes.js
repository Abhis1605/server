import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import requireAdmin from "../middlewares/requiredAdmin.js";
import { getAllTasksForAdmin, getAllUsersForAdmin } from "../controllers/admin.controller.js";

const adminRoute = Router()

// GET /api/admin/users
adminRoute.get('/users', requireAuth, requireAdmin, getAllUsersForAdmin)

// GET /api/admin/tasks
adminRoute.get('/tasks', requireAuth, requireAdmin, getAllTasksForAdmin)

export default adminRoute