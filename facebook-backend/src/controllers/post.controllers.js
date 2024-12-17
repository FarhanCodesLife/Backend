import mongoose from "mongoose";
import User from "../modules/user.module.js";
import Post from "../modules/post.module.js";
 const createPost = async (req, res) => {
    const { title, description ,autorId} = req.body;
    if(!title || !description|| !autorId){return res.status(400).json({ error: "All fields are required" });}
    try {
        if (!mongoose.Types.ObjectId.isValid(autorId)) {
            return res.status(400).json({ error: "Not valid Id" });
          }
        




        const post = await Post.create({
            title,
            description,
            autorId
             });


             const user = await User.findByIdAndUpdate(autorId,{
                $push: { posts: post._id }

            });
            if(!user){return res.status(404).json({ error: "User not found" });}

        res.status(201).json(post);





    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const likeandcommets = async (req, res) => {
    const {postId} = req.params;
    const {action,Id ,usercomment} = req.body;
try{

    
    if (!mongoose.Types.ObjectId.isValid(postId)||!mongoose.Types.ObjectId.isValid(Id)) {
        return res.status(400).json({ error: "Not valid Id" });
    }
    const post = await Post.findById(postId);

    if (!post) {
        return res.status(404).json({ error: "Post not found!" });
    }
    
if(action == "like"){

    
    // Check if the user already liked the post
    const likeIndex = post.likes.indexOf(Id);
    
    if (likeIndex === -1) {
        // If Id is not in the likes array, add it
        post.likes.push(Id);
        
        await post.save();
        return res.status(200).json({ message: "Like added successfully", likes:post.likes.length,

         });
    } else {
        // If Id is already in the likes array, remove it
        post.likes.splice(likeIndex, 1);
        await post.save();
        return res.status(200).json({ message: "Like removed successfully", likes: post.likes.length,});
    }
}


if(action == "comment"){
    if(!usercomment){
        return res.status(400).json({error:"comment is requied"})
    }
    post.comments.push({comment:usercomment,user:Id});
    await post.save();
    return res.status(200).json({ message: "Comment added successfully",Commits:post.comments});
};

res.status(400).json({ error: "Invalid action" });

}

catch (error) {
    res.status(500).json({ error: error.message });
}
};





const allPosts = async (req, res) => {
//    const {likesId,comments} = req.body

//    if (!mongoose.Types.ObjectId.isValid(likesId)) {
//     return res.status(400).json({ error: "Not valid Id" });
//   }
//   const addlike = await Post.findByIdAndUpdate(likesId, {
//     $push: { likes: likesId },
//   });
// res.status(200).json({massage:"add like"});  



  

    
   
    try {
        const posts = await Post.find();
        res.status(200).json(posts);




    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {createPost,allPosts,likeandcommets}