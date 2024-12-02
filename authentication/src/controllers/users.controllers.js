import jwt from 'jsonwebtoken'
import Users from '../models/users.modules.js'

const generateAccessToken = (users) =>{ 
    return jwt.sign({ email: users.email }, "farhan" , {expiresIn: '6h'});
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


export {generateAccessToken,generateRefreshToken,register}