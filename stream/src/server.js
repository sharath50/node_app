const express = require("express");
const app = express();

// configurations
require("dotenv").config();

// routers
app.get("/", (req, res) => {
  res.send("welcome to stream service");
});

// app listening
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
