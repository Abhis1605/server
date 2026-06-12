import { readUsers } from "../utils/fileHandler.js";

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

export { getAllUsersForAdmin };
