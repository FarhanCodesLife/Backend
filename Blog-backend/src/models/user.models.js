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
   
    
},{

    timestamps:true
}
)

const usermodels = mongoose.model("user",userschema)
export default usermodels
