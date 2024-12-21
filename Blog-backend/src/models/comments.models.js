import mongoose from "mongoose";

const commentschema = new mongoose.Schema({
    comment:{type:String},
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"post"},
})

export default  mongoose.model("comments",commentschema)