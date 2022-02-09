// 1.initialize our app
const express = require("express");
// const app = require("express");
// 2.create server
const server = express();

// to parse our json body, we are gonna use a middleware call use
server.use(express.json());

server.use(express.static("public"));

// 3.create a local host
// listen is a built-in function that established a connection on a specific host or port
// it takes 2 parameters, the first one the host number and the
// second is an optional callback function
server.listen(4000, () => console.log(`http://localhost:${4000}`));
