import express from "express";
import { addTodo } from "../controlers/todos.controlers.js";

const router = express.Router();

router.post("/todo", addTodo);

export default router;