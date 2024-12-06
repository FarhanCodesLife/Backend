
import mongoose from "mongoose";
import { loginUser, register, uploadimage } from "../controllers/users.controllers.js";
import express from "express"
import { upload } from "../midlewire/multer.midlewire.js";
const router = express.Router()

router.post('/register',register)
router.post('/login',loginUser)
router.post('/uploadimages', upload.single("file"), uploadimage);

export default router

