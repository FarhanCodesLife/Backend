import jwt from 'jsonwebtoken'
import Users from '../models/users.modules.js'
import bcrypt from 'bcrypt'
import { application } from 'express';

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


export {generateAccessToken,generateRefreshToken,register,loginUser}