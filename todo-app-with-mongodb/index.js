import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/index.js";
import userroutes from "./routes/route.js"
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", userroutes); // Add a new user

// Home Route
app.get("/", (req, res) => {
  res.send("Hello, welcome to the user API!");
});

// Database Connection and Server Startup
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
