import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

// Add a todo
export const addTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    const newTodo = await Todos.create({ title, description });
    res.status(201).json({ message: "Todo added successfully", todo: newTodo });
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo", details: error.message });
  }
};

// // Get all todos
// export const getAllTodos = async (req, res) => {
//   try {
//     const todos = await Todos.find();
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch todos", details: error.message });
//   }
// };

// // Get a single todo by ID
// export const getTodoById = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "Invalid ID" });
//   }

//   try {
//     const todo = await Todos.findById(id);
//     if (!todo) {
//       return res.status(404).json({ error: "Todo not found" });
//     }
//     res.status(200).json(todo);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch todo", details: error.message });
//   }
// };

// // Delete a todo
// export const deleteTodo = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "Invalid ID" });
//   }

//   try {
//     const deletedTodo = await Todos.findByIdAndDelete(id);
//     if (!deletedTodo) {
//       return res.status(404).json({ error: "Todo not found" });
//     }
//     res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete todo", details: error.message });
//   }
// };

// // Edit a todo
// export const editTodo = async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "Invalid ID" });
//   }

//   try {
//     const updatedTodo = await Todos.findByIdAndUpdate(
//       id,
//       { title, description },
//       { new: true } // Return the updated document
//     );
//     if (!updatedTodo) {
//       return res.status(404).json({ error: "Todo not found" });
//     }
//     res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update todo", details: error.message });
//   }
// };

// getAllTodos, getTodoById, deleteTodo, editTodo

export { addTodo };
