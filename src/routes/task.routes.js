import { Router } from "express";
import requireAuth from "../middlewares/requireAuth.js";

const taskRoute = Router()

// just test route for the task to check only users can access this route
taskRoute.get('/', requireAuth, (req, res) => {
    res.json({
        message: "User tasks",
        user: req.user
    })
})

export default taskRoute