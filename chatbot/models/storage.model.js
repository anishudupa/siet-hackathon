import mongoose from "mongoose"
// import "dotenv/config"
const StorageSchema = new mongoose.Schema({
    name: String,
    rentPerDay: Number,
    city: String,
    owner: String,
})

export const Storage = mongoose.model("Storage", StorageSchema)

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

// // Generate Random Data
// const generateRandomStorages = (count) => {
//     const storages = []

//     for (let i = 0; i < count; i++) {
//         const isKarnataka = i < count / 2
//         const city = isKarnataka
//             ? citiesKarnataka[
//                   Math.floor(Math.random() * citiesKarnataka.length)
//               ]
//             : agriculturalCitiesIndia[
//                   Math.floor(Math.random() * agriculturalCitiesIndia.length)
//               ]

//         const storage = {
//             name: `Storage Facility ${i + 1}`,
//             rentPerDay: Math.floor(Math.random() * 900) + 100, // Random rent per day between 100 and 1000
//             city: city,
//             owner: `Owner ${i + 1}`,
//         }

//         storages.push(storage)
//     }

//     return storages
// }

// // Insert Data into MongoDB
// const insertSampleData = async () => {
//     try {
//         const storages = generateRandomStorages(10)
//         await Storage.insertMany(storages)
//         console.log("Sample data inserted successfully")
//     } catch (error) {
//         console.error("Error inserting sample data:", error)
//     } finally {
//         mongoose.connection.close() // Close the connection after insertion
//     }
// }

// // Run the function to insert sample data
// insertSampleData()
