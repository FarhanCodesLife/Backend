import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

connectDB();
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});