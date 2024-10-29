import mongoose from "mongoose"
// import "dotenv/config"
const CropSchema = new mongoose.Schema({
    price: Number,
    place: String,
    availableQuantity: Number,
    cropType: String,
    seller: String,
})

export const Crop = mongoose.model("Crop", CropSchema)

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

// const cropTypes = [
//     "Rice",
//     "Wheat",
//     "Maize",
//     "Sugarcane",
//     "Cotton",
//     "Pulses",
//     "Fruits",
//     "Vegetables",
//     "Oilseeds",
//     "Spices",
// ]

// // Generate Random Data
// const generateRandomCrops = (count) => {
//     const crops = []

//     for (let i = 0; i < count; i++) {
//         const isKarnataka = i < count / 2
//         const place = isKarnataka
//             ? citiesKarnataka[
//                   Math.floor(Math.random() * citiesKarnataka.length)
//               ]
//             : agriculturalCitiesIndia[
//                   Math.floor(Math.random() * agriculturalCitiesIndia.length)
//               ]

//         const crop = {
//             price: Math.floor(Math.random() * 5000) + 1000, // Random price between 1000 and 6000
//             place: place,
//             availableQuantity: Math.floor(Math.random() * 1000) + 50, // Random quantity between 50 and 1000 kg
//             cropType: cropTypes[Math.floor(Math.random() * cropTypes.length)],
//             seller: `Seller ${i + 1}`,
//         }

//         crops.push(crop)
//     }

//     return crops
// }

// // Insert Data into MongoDB
// const insertSampleData = async () => {
//     try {
//         const crops = generateRandomCrops(10)
//         await Crop.insertMany(crops)
//         console.log("Sample data inserted successfully")
//     } catch (error) {
//         console.error("Error inserting sample data:", error)
//     } finally {
//         mongoose.connection.close() // Close the connection after insertion
//     }
// }

// // Run the function to insert sample data
// insertSampleData()
