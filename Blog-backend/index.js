import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import router from "./src/routes/blogs.routes.js";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());

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