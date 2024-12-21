import mongoose from "mongoose";
import postmodels from "../models/post.models.js";
import commentmodels from "../models/comments.models.js";

export const createcomment = async (req, res) => {
    const { comment, authorId, postId } = req.body;

    if (!comment || !authorId || !postId) {
        return res.status(400).json({ error: "SOMETHING IS MISSING in Body" });
    }

    try {
        const post = await postmodels.findByIdAndUpdate(postId,{
            $push:{comments:{comment,authorId}}
        });
        if (!post) {
            return res.status(400).json({ error: "post does not exist" });
        }

        res.status(201).json({
            massage: "comment created successfully",
            success: true,
            post,
        });
    }

    catch (error) {
        return res.status(400).json({ error: "SOMETHING IS MISSING" });
    }
};