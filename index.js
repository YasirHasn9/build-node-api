// 1.initialize our app
const app = require("express");
// 2.create server
const server = app();

// 4.create our endpoints
server.get("/", (req, res) => {
  res.json("Hello world");
});

server.get("/users", (req, res) => {
  res.status(200).send([
    {
      name: " Yasir",
    },
    {
      name: "Aj",
    },
    {
      name: "Ali",
    },
  ]);
});

// 3.create a local host
// listen is a built-in function that established a connection on a specific host or port
// it takes 2 parameters, the first one the host number and the
// second is an optional callback function
server.listen(4000, () => console.log(`http://localhost:${4000}`));
