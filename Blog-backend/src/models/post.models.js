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
   

},{

    timestemps:true
}
)

const postmodels = mongoose.model("post",postschema)
export default postmodels