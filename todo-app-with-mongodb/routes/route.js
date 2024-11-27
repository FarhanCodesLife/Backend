import express from "express"
import {addUser,AllUser,Deleteuser } from "../controlers/controler.js"

const router = express.Router()

router.post('/user',addUser)
router.get('/users',AllUser)
router.delete('/user/:id',Deleteuser)

export default router