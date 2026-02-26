import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import githubRoutes from "./routes/GithubRoutes.js"

dotenv.config()

const PORT = process.env.PMD_PORT || 8080 
const server = express()

server.use(cors())
server.use(express.json())

server.use("/api/github", githubRoutes)

server.listen(PORT, () => console.log(`Running on port ${PORT}`))

