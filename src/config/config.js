import dotenv from "dotenv";

dotenv.config()

const requiredEnvVars = [
    "PORT",
    "JWT_SECRET"
]

requiredEnvVars.forEach((key) => {
    if(!process.env[key]){
        throw new Error(`${key} is not defined in env file`)
    }
})

const config = {
    PORT : process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config