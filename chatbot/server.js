import "dotenv/config"
import { app } from "./app.js"
import { dbConnect } from "./db/connect.js"
function main() {
    dbConnect().then(() => {
        const { PORT, IP } = process.env
        app.listen(PORT, IP, () =>
            console.log(`app is listening on port ${PORT}`)
        )
    })
}

main()
