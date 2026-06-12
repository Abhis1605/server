import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import requireAdmin from "../middlewares/requiredAdmin.js";
import { getAllUsersForAdmin } from "../controllers/admin.controller.js";

const adminRoute = Router()

adminRoute.get('/users', requireAuth, requireAdmin, getAllUsersForAdmin)

export default adminRoute