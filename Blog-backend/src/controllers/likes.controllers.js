import mongoose from "mongoose";
import postlikesmodels from "../models/likes.models.js";
import postmodels from "../models/post.models.js";

export const likepost = async (req,res)=>{
    const {autorId,postId} = req.body
    if(!autorId || !postId){
        return res.status(400).json({error:"SOMETHING IS MISSING in Body"})
    }
    try {
        const post = await postmodels.findByIdAndUpdate(postId,{
           $push:{like:autorId}   
        })
        
        res.status(201).json({
            massage:"like successfully",
            success:true,
            post
        })
        
    } catch (error) {
        return res.status(400).json({error:"SOMETHING IS MISSING"})
    }


}

