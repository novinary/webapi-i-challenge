// implement your API here

const express = require("express");

const server = express();
const PORT = 4000;

// endpoints

server.get("/greet", (req, res) => {
  res.send("Hello");
});

server.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

// listening

server.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
