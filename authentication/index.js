import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "./src/db/index.js";
import { generateAccessToken, generateRefreshToken } from "./src/controllers/users.controllers.js";
import { URLSearchParams } from "url";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.post("/bcryptPassword" , async (req,res)=>{
const {email,password} = req.body
const key = 10

const bcryptPassword = await bcrypt.hash(password,key)
if(!bcryptPassword) return res.status(404).json({
    massage:"password error in bcrypt"
})

res.status(200).json({
    bcryptPassword
})
const user ={
    useremail:email,
    password:bcryptPassword,
}



})

const bcryptPassword = "$2b$10$wRKE6dnhUCIqvr8qzpm2TeCOXFmFEG8BDvpW8u7EhQWzQNIkfNHSu"

app.post('/checkpassword', async (req,res)=>{

    const {password}= req.body

   const checkpassword = await bcrypt.compare(password,bcryptPassword)

   const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTczMjkxOTEzMiwiZXhwIjoxNzMyOTQwNzMyfQ.AlFIuQ8RhHiUwvAh5m9Ur4fIqRHtW1s1p78gkFCuNTM"

   if(!checkpassword) return res.status(404).json({
    massage:"password not match"
   })
   res.status(200).json({
    massage:"password correct",
    checkpassword

   })

})


app.post('/addjwt',(req,res)=>{
    const {email,password} = req.body

    const user ={
        email:email,
        password:password,
    }

res.status(200).json({access:generateAccessToken(user),
refresh:generateRefreshToken(user)}
)

})



connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });