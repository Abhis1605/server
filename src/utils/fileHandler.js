import fs from "fs/promises"

const USERS_FILE = "src/data/users.json"
const TASKS_FILE = "src/data/tasks.json"

// To read users from file
export const readUsers = async () => {
    const data = await fs.readFile(USERS_FILE, "utf-8")
    return JSON.parse(data)
}

// to save users in file
export const writeUsers = async (users) => {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
}

// to read tasks from tasks.json
export const readTasks = async () => {
    const data = await fs.readFile(TASKS_FILE, "utf-8")
    return JSON.parse(data)
}

//to save tasks in file
export const writeTasks = async (tasks) => {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2))
}