import express from "express"
import { Transporter } from "../models/transport.model.js"

const router = express.Router()

router
    .route("/transporters")
    .get(async (_, res) => {
        const transporters = await Transporter.find()
        return res.status(200).json({ data: transporters })
    })
    .post(async (req, res) => {
        const { driverName, chargePerKm, vechichleType, phoneNo, addr } =
            req.body
        const transporter = await Transporter.create({
            driverName,
            chargePerKm,
            vechichleType,
            phoneNo,
            addr,
        })
        await transporter.save()
        return res
            .status(200)
            .json({ message: "transporter created successfully" })
    })

export default router
