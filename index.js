// import express from 'express';
// const app = express();
// const port = 3000;

// // Middleware
// app.use(express.json());

// const user = [];

// // POST route to add a user
// app.post('/users', (req, res) => {
//   const { title } = req.body;  // Fixed the way req.body is accessed

//   // Condition to check if title is provided
//   if (!title) {
//     res.status(400).json({
//       message: 'Title is required' // Corrected the message
//     });
//     return;
//   }

//   // Add data to the user array
//   user.push({ title });

//   // Send response
//   res.status(201).json({
//     message: 'Data added successfully',
//     data: user
//   });
// });

// // GET route
// app.get('/', (req, res) => {
//   res.send( user);

// });



// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });











import express from "express";
const app = express()
const port = 3000


app.use(express.json())


app.get('/' ,(req,res)=>{
  res.send('hello farhan')
})

app.post('/user',(req,res)=>{
  const {name} = req.body;
  if(!name){
    res.status(400).json(
      {
        message:'name is required',
      }
    )
    return
  }
  res.status(200).json(
    {
      masage:'succesfully response',
      name

    }
  )

})

app.listen(port,()=>{
  console.log('server is running on port 3000')
})









