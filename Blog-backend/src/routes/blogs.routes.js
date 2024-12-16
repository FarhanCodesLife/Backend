import express from "express";
import {registeruser, loginuser } from "../controllers/users.controllers.js";
import {createBlog,  allblogs } from "../controllers/blog.controllers.js";

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("My Blogs")
})

router.post('/register', registeruser);
router.post('/login', loginuser);
router.post('/createblog',createBlog)
router.get('/allblogs',allblogs)


export default router