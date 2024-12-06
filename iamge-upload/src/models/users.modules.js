import mongoose from "mongoose";
import bcrypt from "bcrypt"
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre("save", async function (next) {

        if(!this.isModified("password"))return naxt()
            this.password = await bcrypt.hash(this.password,10)
        next()
    
})

//Export the model
export default mongoose.model('Users', userSchema);