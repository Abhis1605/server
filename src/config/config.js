import dotenv from "dotenv";

dotenv.config()

const requiredEnvVars = [
    "PORT",
]

requiredEnvVars.forEach((key) => {
    if(!process.env[key]){
        throw new Error(`${key} is not defined in env file`)
    }
})

const config = {
    PORT : process.env.PORT,
}

export default config