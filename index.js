const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
const hotels = require('./data/hotels.json')

app.get("/", (req, res) => {
  res.send("Tour bd Server Running...");
});

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.listen(port, () => {
  console.log(`Tour bd Server Running... ${port}`);
});