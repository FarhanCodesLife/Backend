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
    blogs:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}]
   
    
},{

    timestamps:true
}
)

const usermodels = mongoose.model("user",userschema)
export default usermodels
