
import mongoose from "mongoose";
import { loginUser, register } from "../controllers/users.controllers.js";
import express from "express"
const router = express.Router()

router.post('/register',register)
router.post('/login',loginUser)

export default router

