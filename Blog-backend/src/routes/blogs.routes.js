import express from "express";
import {registeruser, loginuser } from "../controllers/users.controllers.js";

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("My Blogs")
})

router.post('/register', registeruser);
router.post('/login', loginuser);


export default router