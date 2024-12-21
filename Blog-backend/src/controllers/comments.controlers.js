import postmodels from "../models/post.models";
import mongoose from "mongoose";
import commentmodels from "../models/comments.models";

export const createcomment = async (req, res) => {
    const { comment, authorId, postId } = req.body;

    if (!comment || !authorId || !postId) {
        return res.status(400).json({ error: "SOMETHING IS MISSING in Body" });
    }

    try {
        const post = await postmodels.findByIdandUpdate(postId,{
            $push:{comments:{comment,authorId}}
        });
        if (!post) {
            return res.status(400).json({ error: "user does not exist" });
        }

        const comment = await commentmodels.create({
            comment,
            authorId,
            postId,
        });
    }

    catch (error) {
        return res.status(400).json({ error: "SOMETHING IS MISSING" });
    }
};