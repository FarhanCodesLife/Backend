import jwt from 'jsonwebtoken'
import User from '../models/users.modules.js'

const generateAccessToken = (user) =>{ 
    return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET , {expiresIn: '6h'});
}
const generateRefreshToken = (user) =>{ 
    return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET , {expiresIn: '7d'});
}

export {generateAccessToken,generateRefreshToken}