import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req,res)=>{
  res.send('hello world')

})


app.get('/about',(req,res)=>{
  res.send('hello about')
  
})




app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
