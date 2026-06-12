import app from "./src/app.js"
import config from "./src/config/config.js"

const  PORT = config.PORT ?? 8000

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})

