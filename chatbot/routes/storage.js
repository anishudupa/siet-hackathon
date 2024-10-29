import express from "express"
const router = express.Router()
import { Storage } from "../models/storage.model.js"

router.get("/storages", async (_, res) => {
    const storages = await Storage.find()
    return res.status(200).json({ data: storages })
})

export default router
