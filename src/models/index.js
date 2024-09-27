const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.DB_URL

await mongoose.connect(`${DB_URL}/${DB_NAME}`)

console.log("MongoDB is connected");

export default mongoose