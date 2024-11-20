import mongoose from "mongoose";
 import Todo from "../models/todos.models.js"

 const addtodo =(req,res)=>{
    const {title,description} = req.body;
    if(!title || !description){
        res.status(400).json({
            massage:"Plase Title And Description Both Required"
        })
return
    }

    const todo = Todo.create({
       title,
       description
    })
    res.status(201).json({
        massage:"todo Add To data base successfuly"
    })
 }


 export {addtodo}