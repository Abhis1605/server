import { readTasks, writeTasks } from "../utils/fileHandler.js";
import { v4 as uuidv4 } from "uuid"

async function createTask(req, res){
    try {
        const { title, description } = req.body

        if (!title || !description){
            return res.status(400).json({
                message: "Title or Description is required"
            })
        }

        const tasks = await readTasks()

        const newTask = {
            id: uuidv4(),
            title,
            description: description || "",
            status: "pending",
            userId: req.user.id, // to findout who created this task
            createdAt: new Date().toISOString()
        }

        tasks.push(newTask)
        await writeTasks(tasks)

        res.status(201).json({
            message: "Task created successfully",
            task: newTask
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export { createTask }