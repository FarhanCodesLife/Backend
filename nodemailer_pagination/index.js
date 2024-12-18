import mongoose from "mongoose";
import express from "express";
import  connectDB  from "./src/db/index.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const app = express()




app.get("/send", (req, res) => {
    // res.send("Hello World!");
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "alfonso.dibbert45@ethereal.email",
          pass: "csGtJEyF9vJNxNgaxd",
        },
      });

      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
          to: "farhansmit0318@gmail.com ", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        res.send("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }

      main().catch(console.error);

});
connectDB()
.then(()=>{

    app.listen(3000, () => {
        console.log(`Example app listening on port 3000`);
    });
})
.catch(err => console.log(err));