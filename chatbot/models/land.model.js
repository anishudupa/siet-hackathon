import mongoose from "mongoose"
// import "dotenv/config"
const LandSchema = mongoose.Schema(
    {
        ownedBy: String,
        acres: Number,
        city: String,
        pricePerAcre: Number,
    },
    { timestamps: true }
)

export const Land = mongoose.model("Land", LandSchema)

// Generate Random Data
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
// const generateRandomLands = (count) => {
//     const lands = []

//     for (let i = 0; i < count; i++) {
//         const isKarnataka = i < count / 2
//         const city = isKarnataka
//             ? citiesKarnataka[
//                   Math.floor(Math.random() * citiesKarnataka.length)
//               ]
//             : agriculturalCitiesIndia[
//                   Math.floor(Math.random() * agriculturalCitiesIndia.length)
//               ]

//         const land = {
//             ownedBy: `Owner ${i + 1}`,
//             acres: Math.floor(Math.random() * 50) + 1, // Random acres between 1 and 50
//             city: city,
//             pricePerAcre: Math.floor(Math.random() * 300000) + 100000, // Random price per acre between 100,000 and 400,000
//         }

//         lands.push(land)
//     }

//     return lands
// }

// // Insert Data into MongoDB
// const insertSampleData = async () => {
//     try {
//         const lands = generateRandomLands(10)
//         await Land.insertMany(lands)
//         console.log("Sample data inserted successfully")
//     } catch (error) {
//         console.error("Error inserting sample data:", error)
//     } finally {
//         mongoose.connection.close() // Close the connection after insertion
//     }
// }

// // Run the function to insert sample data
// insertSampleData()
