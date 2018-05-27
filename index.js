const express = require("express");
const app = express();

const m = () => (req, res, next) => {
  next();
};

app.use(m);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(5000);
