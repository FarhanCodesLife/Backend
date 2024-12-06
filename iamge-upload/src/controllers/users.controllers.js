import jwt from 'jsonwebtoken'
import Users from '../models/users.modules.js'
import bcrypt from 'bcrypt'
import { application } from 'express';
import fs from "fs";

import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'dwuc4qz3n', 
    api_key: '237728971423496', 
    api_secret: '8Q6ZLV2ouehlYs67BTGq86l2R98' // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const imageupload = async (localpath)=>{
try {
    const uploadResult = await cloudinary.uploader
    .upload(
        localpath, {
            resource_type: 'auto',
        }
        
    )
    fs.unlinkSync(localpath);
    console.log(uploadResult);
    
  
    
} catch (error) {
    console.log(error);
    fs.unlinkSync(localpath);


    
    
}
}



const generateAccessToken = (user) =>{ 
    return jwt.sign({ email: user.email }, "farhan" , {expiresIn: '6h'});
}
const generateRefreshToken = (user) =>{ 
    return jwt.sign({ email: user.email }, "03182127256" , {expiresIn: '7d'});
}

 const register = async (req,res)=>{
    const {email,password} = req.body
    const user = await Users.findOne({email:email})
    if(user)return res.status(400).json({massage:"user is already exist"})
     
        
        const  createUser =  await Users.create({
            email,password
        })
        res.status(200).json({
            massage:"user register successfuly",
            createUser
        })


 }

const loginUser = async (req,res)=>{
    const {email,password} = req.body
    if(!email||!password)return res.status(404).json({
        massage:"please provide email and password"
    })
    const checkUser = await Users.findOne({email:email})
    if (!checkUser)return res.status(404).json({
        massage:"User not Found"
    })

const checkpassword = await bcrypt.compare(password,checkUser.password)

if(!checkpassword)return res.status(404).json({
    massage:"password not match"
})

res.cookie("refreshToken",generateRefreshToken(checkUser),{
    httpOnly: true, // JavaScript se access nahi ho sakta
    secure: process.env.NODE_ENV === 'production', // Secure cookies in production
    sameSite: 'Strict', // CSRF se bachne ke liye
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din ki expiry
});

res.status(200).json({
    massage:"Login successfuly",
    accessToken:generateAccessToken(checkUser),
    refreshToken:generateRefreshToken(checkUser)
})

}



const uploadimage = async (req,res)=>{
    const {localpath} = req.file.path
    if(!localpath)return res.status(404).json({
        massage:"please provide image"
    })
    imageupload(localpath)
    res.status(200).json({
        massage:"image upload successfuly"
    })
    
}

export {generateAccessToken,generateRefreshToken,register,loginUser ,uploadimage}