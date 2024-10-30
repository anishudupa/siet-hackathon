import express from "express"
const router = express.Router()
import { Storage } from "../models/storage.model.js"

router
    .route("/storages")
    .get(async (_, res) => {
        const storages = await Storage.find()
        return res.status(200).json({ data: storages })
    })
    .post(async (req, res) => {
        const { name, rentPerDay, city, owner } = req.body
        const storage = await Storage.create({ name, rentPerDay, city, owner })
        await storage.save()
        return res.status(200).json({ message: "storage added successfully" })
    })
export default router
