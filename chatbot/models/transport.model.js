import mongoose from "mongoose"
// import "dotenv/config"
const TransporterSchema = mongoose.Schema(
    {
        driverName: String,
        chargePerKm: Number,
        vechicleType: String,
        phoneNo: Number,
        addr: String,
        ratings: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
)

export const Transporter = mongoose.model("Transporter", TransporterSchema)

// mongoose.connect(process.env.DB_URL)

// const citiesKarnataka = [
//     "Bangalore",
//     "Mysore",
//     "Hubli",
//     "Mangalore",
//     "Belgaum",
//     "Gulbarga",
//     "Davanagere",
//     "Bellary",
//     "Bijapur",
//     "Shimoga",
// ]

// const agriculturalCitiesIndia = [
//     "Indore",
//     "Ahmedabad",
//     "Nagpur",
//     "Amritsar",
//     "Rajkot",
//     "Ludhiana",
//     "Kanpur",
//     "Bhopal",
//     "Patna",
//     "Coimbatore",
// ]

// const vehicleTypes = ["Truck", "Mini Truck", "Tempo", "Container", "Trailer"]

// // Generate Random Data
// const generateRandomTransporters = (count) => {
//     const transporters = []

//     for (let i = 0; i < count; i++) {
//         const isKarnataka = i < count / 2
//         const addr = isKarnataka
//             ? citiesKarnataka[
//                   Math.floor(Math.random() * citiesKarnataka.length)
//               ]
//             : agriculturalCitiesIndia[
//                   Math.floor(Math.random() * agriculturalCitiesIndia.length)
//               ]

//         const transporter = {
//             driverName: `Driver ${i + 1}`,
//             chargePerKm: Math.floor(Math.random() * 15) + 5, // Random charge between 5 and 20
//             vechicleType:
//                 vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)],
//             phoneNo: 9000000000 + Math.floor(Math.random() * 1000000000), // Random 10-digit number
//             addr: addr,
//             ratings: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
//         }

//         transporters.push(transporter)
//     }

//     return transporters
// }

// // Insert Data into MongoDB
// const insertSampleData = async () => {
//     try {
//         const transporters = generateRandomTransporters(10)
//         await Transporter.insertMany(transporters)
//         console.log("Sample data inserted successfully")
//     } catch (error) {
//         console.error("Error inserting sample data:", error)
//     } finally {
//         mongoose.connection.close() // Close the connection after insertion
//     }
// }

// // Run the function to insert sample data
// insertSampleData()
