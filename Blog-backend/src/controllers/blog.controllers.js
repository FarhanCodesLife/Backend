import mongoose  from "mongoose";
import postmodels from "../models/post.models.js";
import usermodels from "../models/user.models.js";


const createBlog = async (req,res)=>{
    const {title,content,authorId} = req.body
    if(!title || !content){
        return res.status(400).json({error:"SOMETHING IS MISSING in Body"})
    }
    try {
        const userexist = await usermodels.findById(authorId)
        if(!userexist){
            return res.status(400).json({error:"user does not exist"})
        }
        
        const blog = await postmodels.create({
            title,
            content,
            authorId
        })
        
        const author =  await usermodels.findByIdAndUpdate(authorId,{
            $push:{blogs:blog._id}
        })
        res.status(201).json({
            massage:"blog created successfully",
            success:true,
        })
        
    } catch (error) {
        return res.status(400).json({error:"SOMETHING IS MISSING"})
    }

}


export default createBlog
