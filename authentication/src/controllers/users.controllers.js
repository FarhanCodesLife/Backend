import jwt from 'jsonwebtoken'
import Users from '../models/users.modules.js'

const generateAccessToken = (users) =>{ 
    return jwt.sign({ email: users.email }, "farhan" , {expiresIn: '6h'});
}
const generateRefreshToken = (user) =>{ 
    return jwt.sign({ email: user.email }, "03182127256" , {expiresIn: '7d'});
}

export {generateAccessToken,generateRefreshToken}