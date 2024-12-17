import mongoose from "mongoose";
import User from "../modules/user.module.js";
import Post from "../modules/post.module.js";
 const createPost = async (req, res) => {
    const { title, description ,autorId} = req.body;
    if(!title || !description|| !autorId){return res.status(400).json({ error: "All fields are required" });}
    try {
        // if (!mongoose.Types.ObjectId.isValid(autorId)) {
        //     return res.status(400).json({ error: "Not valid Id" });
        //   }
        




        const post = await Post.create({
            title,
            description,
            autorId
             });


             const user = await User.findByIdAndUpdate(autorId,{
                $push: { posts: post._id }

            });
            // if(!user){return res.status(404).json({ error: "User not found" });}

        res.status(201).json(post);





    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {createPost}