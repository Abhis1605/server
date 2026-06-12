import bcrypt from "bcryptjs";
import { readUsers, writeUsers } from "./fileHandler.js"

const createDefaultAdmin = async () => {

    const users = await readUsers()

    const adminExists = users.find(u => u.role === 'admin')

    if (adminExists) return

    const hashedPassword = await bcrypt.hash('admin123', 10)

    const adminUser = {
        id: "admin-id",
        username: "admin",
        password: hashedPassword,
        role: "admin"
    }

    users.push(adminUser)

    await writeUsers(users)

    console.log("Admin created successfully")
}

export default createDefaultAdmin