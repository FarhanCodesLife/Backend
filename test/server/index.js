import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./src/db/index.js";
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

const product = [
    {id: "1", name: "Product 1", price: 1000},
    {id: "2", name: "Product 2", price: 2000},
    {id: "3", name: "Product 3", price: 3000},
    {id: "4", name: "Product 4", price: 4000},
    {id: "5", name: "Product 5", price: 5000},


]

app.get("/", (req, res) => {
    res.send(product);
});

app.post("/create", (req, res) => {
    const newProduct = req.body;
    product.push(newProduct);
    res.status(201).json(product);
    
})

app.put('/update/:id',(req,res)=>{

    const id = req.params;
    const updatedProduct = req.body;
    product[id] = updatedProduct;
    res.status(200).json(product);

})

app.delete('/delete/:id', (req, res) => {
    const id = req.params;
   const newProduct = product.filter((item)=>{item.id != id})
    // product.splice(id, 1);
    res.status(200).json(newProduct);
  });



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// connectDb()
// .then(()=>{

//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`);
//     });
// }).catch((error)=>{
//     console.log(error.massage);
// })