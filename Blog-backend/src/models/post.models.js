import mongoose from "mongoose";

const postschema = new mongoose.Schema({
    title:{
        type:String,
        length:20,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
   like:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"likes"
   }],
   comments:[{comment:{
    type:String,
   },
   authorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comments"
   }}],

},{

    timestemps:true
}
)

const postmodels = mongoose.model("post",postschema)
export default postmodels