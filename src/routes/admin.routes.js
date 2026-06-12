import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";
import requireAdmin from "../middlewares/requiredAdmin.js";

const adminRoute = Router()

// basic route for testing users can not access this route
adminRoute.get('/users', requireAuth, requireAdmin, (req, res) => {
    res.json({
        message: "All users"
    })
})

adminRoute.get('/tasks', requireAuth, requireAuth, (req, res) =>{
    res.json({
        message: "all tasks"
    })
})


export default adminRoute