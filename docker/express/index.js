const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express Frontend (ECS)");
});

app.listen(3000, "0.0.0.0");

