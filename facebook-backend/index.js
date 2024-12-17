import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import postRoutes from "./routes/posts.js";
import connectDB from "./src/db/index.js";

dotenv.config();
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());
// app.use(cors());

// app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


connectDB()
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error));
