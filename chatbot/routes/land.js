import express from "express"
const router = express.Router()
import { Land } from "../models/land.model.js"

router.get("/lands", async (_, res) => {
    const lands = await Land.find()
    return res.status(200).json({ data: lands })
})

export default router
