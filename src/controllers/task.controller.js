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

async function getTasks(req, res){
    try {
        const tasks = await readTasks()

        const userTasks = tasks.filter(
            (task) => task.userId === req.user.id
        )

        res.status(200).json({
            message: "Tasks fetched successfully",
            userTasks
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function updateTask(req, res){
    try {
        const { id } = req.params

        const { title, description } = req.body

        const tasks = await readTasks()

        const task = tasks.find((t) => t.id === id)

        if(!task){
            return res.status(404).json({
                message: "Task not found"
            })
        }

        if (task.userId !== req.user.id) {
            return res.status(403).json({
                message: "Forbidden: Not your task"
            })
        }

        if (title !== undefined) {
            task.title = title
        }

        if (description !== undefined) {
            task.description = description
        }

        await writeTasks(tasks)

        res.status(200).json({
            message: "task updated successfully",
            task
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error"})
    }
}

async function deleteTask(req, res){
    try {
        const { id } = req.params

        const tasks = await readTasks()

        const task = tasks.find((t) => t.id === id)

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            })
        }

        if (task.userId !== req.user.id) {
            return res.status(403).json({
                message: "Forbidden: Not your task"
            })
        }

        const updatedTasks = tasks.filter((t) => t.id !== id)

        await writeTasks(updatedTasks)

        res.status(200).json({
            message: "Task deleted successfully"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export { createTask, getTasks, updateTask, deleteTask }