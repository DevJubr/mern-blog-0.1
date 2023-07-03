const express = require("express");
const dotEnv = require("dotenv");
// crating app
const app = express();

// env configaretion
dotEnv.config({
  path: "./config/config.env",
});
const PORT = process.env.PORT || 6666;

// test route
app.get("/", (req, res) => {
  return res.send("hi baby");
});

// listeling server
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server listening on PORT ${PORT}`);
  }
});
