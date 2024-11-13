import express from 'express'
const app = express()
const port = 3000

// midlewear 
app.use(express.json())

const user  = []

app.post('/user', (req, res) => {
  const {title} = req.body()



  // age user ka title na ai to ya condition follow ho.
  if(!title){
    res.status(400).json({
      message : 'title is requird'
    })
    return;
  }

  // user ma data add kra na ka liya
  user.push({
    title : title
  })

  // responce bhajna ka liya 
  res.status(201).json({
    message : 'data add succesfully',
    data : user
  })
})



// req.param()
// id get krna k a liya 
// id ka zrya api create hogi 


// thunderclint

app.get('/', (req, res) => {
  res.send('hello world')
})
  
app.get('/about', (req, res) => {
  res.send('Hello farhan!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})