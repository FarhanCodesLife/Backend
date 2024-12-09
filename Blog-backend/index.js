import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express())

const port = 3000

app.get('/',(req,res)=>{
res.send('hello world')
})

app.listen(port,()=>{
    console.log(`server is runnig this port ${port}`);

})