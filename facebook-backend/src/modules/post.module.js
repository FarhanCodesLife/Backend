import mongoose from "mongoose";

const postshema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // trim: true
    },
    description: {
        type: String,
        required: true,
        // trim: true
    },
    autorId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes:[

        {
            type:mongoose.Schema.Types.ObjectId,
            default: 0
        },
    ],
    comments: {
        type: Array,
        default: []
    }
    // image: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
},{
    timestamps: true
})

export default mongoose.model("Post", postshema);
