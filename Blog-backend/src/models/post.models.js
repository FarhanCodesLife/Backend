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
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

},
timestemps=true
)

const postmodels = mongoose.model("post",postschema)
export default postmodels