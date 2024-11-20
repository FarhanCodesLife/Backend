import dotevn from "dotenv"
dotevn.config()

import express from "express"
import todoroutes from "./src/routes/todos.routes.js"
import connectDB from "./src/db/index.js"
const app = express()
const PORT = process.env.PORT



app.use(express.json())



app.get('/',(req,res)=>{
res.send('hello world')
})



app.use("/api/v2",todoroutes)



connectDB()
.then(()=>{

    app.listen(PORT,()=>{
        console.log('db is runing properly');
        
    })
})
.catch((error)=>{
console.log(error);

})