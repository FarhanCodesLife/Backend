import mongoose from "mongoose"

const postlikeschema = new mongoose.Schema({
autorId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
postId:{type:mongoose.Schema.Types.ObjectId,ref:"post"},

})

const postlikesmodels = mongoose.model("likes",postlikeschema)
export default postlikesmodels