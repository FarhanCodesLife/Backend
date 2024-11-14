import express from "express";
const app = express()
const port = 3000

app.use(express.json())

const user = [
  {
    data: {
      id: 1,
      name: "farhan",
      email: "farhan@example.com",
    },
  },
  {
    data: {
      id: 2,
      name: "farooq",
      email: "farooq@example.com",
    },
  },
]
app.get('/',(req,res)=>{
  res.send('hello world')
  
})
app.post('/user',(req,res)=>{
  const{name,id,email}=req.body;
  res.status(201).json({
   user
  })
  user.push({data:{id,name,email}})
})
app.get('/user/:id',(req,res)=>{
  const {id} = req.params
  const index = user.findIndex((item)=>item.data.id === +id)

  if (index === -1) {
    res.status(404).json({
      message: "User not found",
    });
    return
  }
  
  res.status(200).json({
    data:user[index].data
  })

})



app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
