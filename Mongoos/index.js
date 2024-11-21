import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js"; // Ensure DB connection file
import todoRoutes from "./src/routes/todos.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", todoRoutes);

// Test Endpoint
app.get("/", (req, res) => {
  res.send("API is working");
});

// Connect to MongoDB and Start Server
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
