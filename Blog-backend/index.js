import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import router from "./src/routes/blogs.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use("/api/user", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});



connectDB()
.then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  })