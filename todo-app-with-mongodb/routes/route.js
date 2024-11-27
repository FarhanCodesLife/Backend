import express from "express"
import {addUser,AllUser,Deleteuser, EditUser } from "../controlers/controler.js"

const router = express.Router()

router.post('/user',addUser)
router.get('/users',AllUser)
router.delete('/user/:id',Deleteuser)
router.put('/user/:id',EditUser)

export default router