const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// configurations
require("dotenv").config();

// routers
app.get("/", (req, res) => {
  res.send("welcome to stream service : " + PORT);
});

// app listening
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
