import express from "express";
import { addTodo } from "../controlers/todos.controlers.js";

const router = express.Router();

router.post("/todo", addTodo);

export default router;



// import express from "express";
// import { addTodo, getAllTodos, getTodoById, deleteTodo, editTodo } from "../controlers/todos.controlers.js";

// const router = express.Router();

// router.post("/todo", addTodo); // Add a todo
// router.get("/todos", getAllTodos); // Get all todos
// router.get("/todo/:id", getTodoById); // Get a single todo
// router.delete("/todo/:id", deleteTodo); // Delete a todo
// router.put("/todo/:id", editTodo); // Edit a todo

// export default router;
