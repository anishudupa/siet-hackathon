import express from "express"
import { run } from "./gemini/chat.js"
import cors from "cors"
import {
    userRoutes,
    cropRoutes,
    landRoutes,
    storageRoutes,
    transportRoutes,
} from "./routes/index.js"
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes)
app.use("/api", transportRoutes)
app.use("/api", landRoutes)
app.use("/api", storageRoutes)
app.use("/api", cropRoutes)

app.post("/api/chatbot", async (req, res) => {
    const { prompt } = req.body
    if (!prompt) return res.status(400).json({ message: "prompt is required" })
    console.log(`request from ${req.ip} at ${new Date()}`)
    const response = await run(prompt)
    return res.status(200).json({ response })
})

export { app }
