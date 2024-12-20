import express from "express"
import http from "http"
import { Server } from "socket.io"
const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("a user connected")
    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})

app.get("/", (req, res) => {
    res.send("hello world")
})

server.listen(3000, () => {
    console.log("listening on *:3000")
})

