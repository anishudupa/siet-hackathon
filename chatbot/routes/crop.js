import express from "express"
const router = express.Router()
import { Crop } from "../models/crop.model.js"

router
    .route("/crops")
    .get(async (_, res) => {
        const crops = await Crop.find()
        return res.status(200).json({ data: crops })
    })
    .post(async (req, res) => {
        const { price, place, cropType, seller, availableQuantity } = req.body
        const crop = await Crop.create({
            price,
            place,
            cropType,
            seller,
            availableQuantity,
        })
        await crop.save()
        return res.status(200).json({ message: "crop created successfully" })
    })

export default router
