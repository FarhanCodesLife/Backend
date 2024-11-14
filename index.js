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
const users =[]

app.post('/user',(req,res)=>{
  const {username} = req.body;
  users.push({
    username
  })
    res.status(201).json(
    {users}
  )

})

app.post('/user/:id',(req,res)=>{
  const {id} = req.params;


})




app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
