import express from "express"
import addUser from "../controlers/controler.js"

const router = express.Router()

router.post('/user',addUser)

export default router