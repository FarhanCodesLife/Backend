import express from "express";
import usermodels from "../models/user.models.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateAccessToken = (user)=>{
    return jwt.sign({email:user.email},process.env.ACCESS_SECRET_KEY,{expiresIn:'1d'})
}
const generateRefreshToken = (user)=>{
    return jwt.sign({email:user.email},process.env.REFRESH_SECRET_KEY,{expiresIn:'7d'})
}


const registeruser = async (req,res)=>{
    const {name,email,password} = req.body
    
    if(!name || !email || !password){
        return res.status(400).json({error:"SOMETHING IS MISSING"})
    
    }
    try {
        const userexist = await usermodels.findOne({email})
        if(userexist){
            return res.status(400).json({error:"user already exist"})
        }
    } catch (error) {
        return res.status(400).json({error:"SOMETHING IS MISSING"})
    }
    const hashpasword =  await bcrypt.hash(password,10)
    
    const user = await usermodels.create({
        name,
        email,
        password : hashpasword   
    }) 
    res.status(201).json({
        massage:"user created successfully",
        success:true,
        user
    })
    
    }





const loginuser = async (req,res)=>{
    const {email,password} = req.body
    
    if(!email || !password){
        return res.status(400).json({error:"SOMETHING IS MISSING"})
    }
    try {
        const userexist = await usermodels.findOne({email})
        if(!userexist){
            return res.status(400).json({error:"user does not exist"})
        }
   

    
        
        const isValidPassword =  await bcrypt.compare(password,userexist.password)
        
        if(!isValidPassword)return res.status(400).json({error:"Something is wrong"})
            
            
            const accessToken = generateAccessToken(userexist)
            const refreshToken = generateRefreshToken(userexist)

res.cookie("refreshToken",refreshToken,{
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:7*24*60*60*1000
})

            
            
            res.status(201).json({
                massage:"user login successfully",
                success:true,
                userexist,
                accessToken
    })
    
} catch (error) {
    return res.status(400).json({error:"SOMETHING IS MISSING"})
}

    }

const logoutuser = async (req,res)=>{
    res.clearCookie("refreshToken")
    res.status(201).json({
        massage:"user logout successfully",
        success:true,
    })
}






// refreshtoken
const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "no refresh token found!" });
  
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
  
    const user = await User.findOne({ email: decodedToken.email });
  
    if (!user) return res.status(404).json({ message: "invalid token" });
  
    const generateToken = generateAccessToken(user);
    res.json({ message: "access token generated", accesstoken: generateToken });
  
    res.json({ decodedToken });
  };
  
  // authenticate user middleware
  const authenticateUser = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(404).json({ message: "no token found" });
  
    jwt.verify(token, process.env.ACCESS_JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "invalid token" });
      req.user = user;
      next();
    });

  }


    export  {registeruser,loginuser,logoutuser,refreshToken,authenticateUser}