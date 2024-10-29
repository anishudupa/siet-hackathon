import express from "express"
const router = express.Router()
import { Crop } from "../models/crop.model.js"

router.get("/crops", async (req, res) => {
    const crops = await Crop.find()
    return res.status(200).json({ data: crops })
})

export default router
