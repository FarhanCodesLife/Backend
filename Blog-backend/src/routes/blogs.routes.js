import express from "express";
import {registeruser, loginuser } from "../controllers/users.controllers.js";
import {createBlog,  allblogs } from "../controllers/blog.controllers.js";
import { likepost } from "../controllers/likes.controllers.js";
import { createcomment } from "../controllers/comments.controlers.js";

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("My Blogs")
})

router.post('/register', registeruser);
router.post('/login', loginuser);
router.post('/createblog',createBlog)
router.get('/allblogs',allblogs)
router.post('/likepost',likepost)
router.post('/comment',createcomment)


export default router