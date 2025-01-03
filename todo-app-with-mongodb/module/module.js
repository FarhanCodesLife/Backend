import mongoose from 'mongoose'

const schema = mongoose.Schema
// Declare the Schema of the Mongo model
const userSchema = new schema({
    firstname:{
        type:String,
        required:true, 
    },
    lastname:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is alredy"],
    },
  
    password:{
        type:String,
        required:true,
        select:false
    },

}
,
{
    timestamps:true
});

//Export the model
export default mongoose.model('User', userSchema);