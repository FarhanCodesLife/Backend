import {io} from "https://cdn.socket.io/4.5.0/socket.io.esm.min.js";

const socket = io('http://localhost:8000');

socket.on('connect', () => {
    console.log('connected');
});