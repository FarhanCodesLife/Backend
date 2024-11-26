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
        unique:true,
    },
  
    password:{
        type:String,
        required:true,
    },

}
,
{
    timestamps:true
});

//Export the model
export default mongoose.model('User', userSchema);