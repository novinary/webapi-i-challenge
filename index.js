// implement your API here

const express = require('express');

const server = express();
const PORT = 4000;

server.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
});