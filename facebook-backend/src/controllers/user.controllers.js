import mongoose from "mongoose";
import User from "../modules/user.module.js";
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){return res.status(400).json({ error: "All fields are required" });}
    try {
        
        const user = await User.create({ 
            name, 
            email,
            password
         });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const loginuserUser = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){return res.status(400).json({ error: "All fields are required" });}
    try {
        const user = await User.findOne({ email });
        if(!user){return res.status(404).json({ error: "User not found" });}
        if(user.password !== password){return res.status(401).json({ error: "Invalid password" });}
        res.status(200).json({massage:"user logged in",
            user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }  
}


export { registerUser,loginuserUser };