const express = require("express");
const app = express();

// configurations
require("dotenv").config();

// routers
app.get("/", (req, res) => {
  res.send("welcome to auth service");
});

// app listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
