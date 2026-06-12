import { readUsers, writeUsers } from "../utils/fileHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import config from "../config/config.js";

async function register(req, res) {
  try {
    const { username, password } = req.body || {};

    console.log(req.body)

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const users = await readUsers();

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword,
      role: "user",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    await writeUsers(users);

    const token = jwt.sign(
      {
        id: newUser.id,
        username: newUser.username,
        role: newUser.role,
      },
      config.JWT_SECRET,
      {
        expiresIn: "15m",
      },
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export { register };
