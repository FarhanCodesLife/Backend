import express from "express";
const router = express.Router();
import usermodels from "../models/user.models.js";
import bcrypt from "bcrypt"



router.get('/',(req,res)=>{
    res.send("My Blogs")
})

router.post('/register', async (req,res)=>{
const {name,email,password} = req.body

if(!name || !email || !password){
    return res.status(400).json({error:"SOMETHING IS MISSING"})

}

const hashpasword =  await bcrypt.hash(password,10)

const user = usermodels.create({
    name,
    email,
    password : hashpasword   
}) 
res.status(201).json({
    massage:"user created successfully",
    success:true,
    user
})

})