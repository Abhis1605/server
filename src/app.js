import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.routes.js"
import taskRoute from "./routes/task.routes.js"
import adminRoute from "./routes/admin.routes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/tasks', taskRoute)
app.use('/api/admin', adminRoute)

export default app