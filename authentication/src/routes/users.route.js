
import mongoose from "mongoose";
import { register } from "../controllers/users.controllers.js";
import express from "express"
const router = express.Router()

router.post('/register',register)
// router.post('/register',register)

export default router

