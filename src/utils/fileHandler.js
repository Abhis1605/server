import fs from "fs/promises"

const USERS_FILE = "src/data/users.json"

// To read users from file
export const readUsers = async () => {
    const data = await fs.readFile(USERS_FILE, "utf-8")
    return JSON.parse(data)
}

// to save users in file
export const writeUsers = async (users) => {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
}