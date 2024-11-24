// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const todoSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Todos", todoSchema);




import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const todoschema = new schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    }
},{
    timestamps:true
}


)


export default mongoose.model('Todo',todoschema)













