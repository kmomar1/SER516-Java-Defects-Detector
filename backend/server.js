import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import githubRoutes from "./routes/GithubRoutes.js"

dotenv.config()

const PORT = process.env.PORT || 8080 
const server = express()

server.use(cors())
server.use(express.json())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Health check route
server.get("/health", (req, res) => {
  res.status(200).type("text/plain").send("Server works");
  console.log("Server works")
});

server.use("/api/github", githubRoutes)

server.listen(PORT, () => console.log(`Running on port ${PORT}`))

