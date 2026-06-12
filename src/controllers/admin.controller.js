import { readTasks, readUsers } from "../utils/fileHandler.js";

async function getAllUsersForAdmin(req, res) {
  try {
    const users = await readUsers();

    const allUsers = users.map((user) => {
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
      };
    });

    res.status(200).json({
        message: "All users fetched",
        users: allUsers
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function getAllTasksForAdmin(req, res) {
     try {
        const tasks = await readTasks()

        const users = await readUsers()

        const allTasks = tasks.map(task => {
            const user = users.find(u => u.id === task.userId)

            return {
                id: task.id,
                title: task.title,
                description: task.description,
                status: task.status,
                createdAt: task.createdAt,
                userId: task.userId,
                username: user ? user.username : "Unknown"
            }
        })

        res.status(200).json({
            message: "All tasks fetched",
            tasks: allTasks
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }

}

export { getAllUsersForAdmin, getAllTasksForAdmin };
