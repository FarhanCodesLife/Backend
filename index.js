import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req,res)=>{
  res.send('hello world')

})
const users =[
  {data:{id:1,name:'farhan'}},
  {data:{id:2,name:'kkkhk'}},
  {data:{id:3,name:'jjgfjgfohn'}},
  {data:{id:4,name:'jogggyhn'}},
]
app.use((req,res,next)=>{
  next()

})

app.get('/about',(req,res)=>{
  res.send('hello about')
})


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
  const {id} = req.params;  //2
  const index = users.findIndex((items)=>items.data.id === +id)
  // jis ka b id mach hojaye uska index number retrun karwado or save karwado 

  res.status(201).json({
    data:users[index].data
  })

  


})




app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
