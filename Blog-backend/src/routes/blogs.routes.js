import express from "express";
import registeruser from "../controllers/blogs.controllers.js";

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("My Blogs")
})

router.post('/register', registeruser);


export default router