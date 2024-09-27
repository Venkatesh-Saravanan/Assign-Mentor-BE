const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors("*"))
app.use(express.json())



app.listen(PORT,()=>console.log(`App listening port ${PORT}`))