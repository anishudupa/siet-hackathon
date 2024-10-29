import mongoose from "mongoose"

const FarmerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: false,
            validate: {
                validator: function (value) {
                    // Ensure that either email or phoneNo is present
                    return value || this.phoneNo
                },
                message: "Either email or phone number must be provided.",
            },
        },
        phoneNo: {
            type: String,
            required: false,
            validate: {
                validator: function (value) {
                    // Ensure that either phoneNo or email is present
                    return value || this.email
                },
                message: "Either phone number or email must be provided.",
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export const Farmer = mongoose.model("Farmer", FarmerSchema)
