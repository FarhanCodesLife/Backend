import mongoose from "mongoose";

const blogschema =new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description: {
        type:String,
        required:[true , "description is required"]
    },
    postedBy:{
        type:String,
        required:[true , "Required field"]
    },
   
},
   timestemp:true

);