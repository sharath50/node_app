const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// configurations
require("dotenv").config();

// routers
app.get("/", (req, res) => {
  res.send("welcome to auth service : " + PORT);
});

// app listening

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
