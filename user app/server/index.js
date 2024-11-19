import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000



// Middleware
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses JSON payloads





app.get('/',(req,res)=>{
  res.send('hello world')

})
const users =[
        {
            "data": {
                "username": "farhan",
                "id": 3
            }
        },
        {
          "data": {
              "username": "jawad",
              "id": 4
          }
      },{
        "data": {
            "username": "subhan",
            "id": 5
        }
    }
    ]



app.get('/about',(req,res)=>{
  res.send('hello about')
})

app.get('/users',(req,res)=>{
  res.json(users)
})




app.post('/user',(req,res)=>{
  const {username} = req.body;
  users.push({data:{
    username:username,
    id:users.length+1
  }})

    res.status(201).json(
    {users}
  )

})
// single user 
app.post('/user/:id',(req,res)=>{
  const {id} = req.params;  //2
  const index = users.findIndex((items)=>items.data.id === +id)
  // jis ka b id mach hojaye uska index number retrun karwado or save karwado 

  res.status(201).json({
    data:users[index].data
  })

})




app.delete('/user/:id',(req,res)=>{
  const{id}= req.params;
  const index = users.findIndex(item => item.data.id === +id)

  if(index === -1){
    res.status(404).json({message: 'User not found'})
    return
  }
  users.splice(index,1)
  res.status(200).json({
    users
  })
})


app.put('/user/:id',(req,res)=>{
  const{id}= req.params;

  const index = users.findIndex(item => item.data.id === +id)
  if(index === -1){
    res.status(404).json({message: 'User not found'})
    return
    }
    const {username}= req.body;
    users[index].data.username = username
    res.status(200).json({
      message:'user updated',
      users
      })

})




app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
