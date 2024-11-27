import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { AllUser, addUser } from "./controlers/controler.js";
import connectDB from "./config/index.js";

const app = express();

app.use(express.json());

app.use("/user", addUser);
app.use("/users", AllUser);

app.get("/", (req, res) => {
  res.send("hello user");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
