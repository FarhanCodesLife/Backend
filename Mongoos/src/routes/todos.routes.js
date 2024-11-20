import express from "express"

import {addtodo} from "../controlers/todos.controlers.js"

const router = express.Router()
router.post('/todo',addtodo)

export default router