var express = require("express");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/character/:character", (req, res) => {
  res.send(req.params.character);
});

app.post("/api/character", (req, res) => {
  res.json(req.body);
});

app.get("/api/search", (req, res) => {
  res.send(req.query.q);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
