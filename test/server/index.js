import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./src/db/index.js";
const port = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});


connectDb()
.then(()=>{

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch((error)=>{
    console.log(error.massage);
})