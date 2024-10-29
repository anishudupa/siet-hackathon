import express from "express"
import { Farmer } from "../models/farmer.model.js"
import bcrypt from "bcrypt"
const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const { email, phoneNo, password } = req.body
        if (!email && !phoneNo)
            return res
                .status(400)
                .json({ message: "atleast one must be present" })
        let existingUserByEmail, existingUserByPhoneNo
        if (email) {
            existingUserByEmail = await Farmer.findOne({ email })
        }
        if (phoneNo) {
            existingUserByPhoneNo = await Farmer.findOne({ phoneNo })
        }
        if (existingUserByEmail || existingUserByPhoneNo)
            return res.status(400).json({ message: "user already exists" })

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await Farmer.create({
            email,
            phoneNo,
            password: hashedPassword,
        })
        await user.save()
        return res.status(200).json({ message: "user created successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "some server error" })
    }
})

router.post("/login", async (req, res) => {
    const { email, phoneNo, password } = req.body

    if (!email && !phoneNo)
        return res
            .status(400)
            .json({ message: "email and phoneno is required" })
    let existingUserByEmail, existingUserByPhoneNo
    if (email) {
        existingUserByEmail = await Farmer.findOne({ email })
    }
    if (phoneNo) {
        existingUserByPhoneNo = await Farmer.findOne({ phoneNo })
    }
    const user = existingUserByEmail ?? existingUserByPhoneNo
    const isTruePassword = await bcrypt.compare(password, user.password)

    if (!isTruePassword)
        return res.status(400).json({ message: "incorrect password" })
    return res.json({ message: "user logged in successfully" })
})

export default router
