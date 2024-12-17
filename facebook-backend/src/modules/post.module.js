import mongoose from "mongoose";

const postshema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // image: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
},{
    timestamps: true
})

export default mongoose.model("Post", postshema);
