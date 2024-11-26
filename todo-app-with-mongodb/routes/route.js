import express from "express"
import {addUser,AllUser } from "../controlers/controler.js"

const router = express.Router()

router.post("/user",addUser)
router.get("/users",AllUser)

export default router