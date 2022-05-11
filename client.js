const io = require("socket.io-client");

const socket = io("http://34.225.63.84:3000");
console.log(socket.id);

socket.on("connect", () => {
    console.log(socket.id); // "G5p5..."
});

socket.on("bnode2", (data) => {
    console.log(data); // "G5p5..."
});


