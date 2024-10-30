import express from "express"
const router = express.Router()
import { Land } from "../models/land.model.js"

router
    .route("/lands")
    .get(async (_, res) => {
        const lands = await Land.find()
        return res.status(200).json({ data: lands })
    })
    .post(async (req, res) => {
        const { ownedBy, acres, city, pricePerAcre } = req.body
        const land = await Land.create({ ownedBy, acres, city, pricePerAcre })
        await land.save()
        return res.status(200).json({ mesage: "land created successfully" })
    })

export default router
