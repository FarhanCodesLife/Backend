import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        length:20,

    },
    email:{
        type:String,
        length:20,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
   
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
timestemps=true
)

const usermodels = mongoose.model("user",userschema)
export default usermodels
