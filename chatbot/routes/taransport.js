import express from "express"
import { Transporter } from "../models/transport.model.js"

const router = express.Router()

router.get("/transporters", async (_, res) => {
    const transporters = await Transporter.find()
    return res.status(200).json({ data: transporters })
})

export default router
