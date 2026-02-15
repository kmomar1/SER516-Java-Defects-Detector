import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT || 8080 
const server = express()

server.use(cors())
server.use(express.json())

server.listen(PORT, () => console.log(`Running on port ${PORT}`))

