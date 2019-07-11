const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const hubsRouter = require("./hubs/hubs-router");

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
