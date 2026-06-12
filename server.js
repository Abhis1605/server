import app from "./src/app.js"
import config from "./src/config/config.js"
import createDefaultAdmin from "./src/utils/createAdmin.js"

const  PORT = config.PORT ?? 8000

app.listen(PORT, async () => {
    await createDefaultAdmin()
    console.log(`Server running on port:${PORT}`)
})

