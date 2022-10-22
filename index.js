const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
const hotels = require('./data/hotels.json')
const locations = require('./data/locations.json')

app.get("/", (req, res) => {
  res.send("Tour bd Server Running...");
});

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get("/hotels/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedHotel = hotels.find(h => h.id === id)
    res.send(selectedHotel)
})

app.get('/locations', (req, res) => {
    res.send(locations)
})

app.get('/locations/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const selectedLocation = locations.find(l => l.id === id);
    res.send(selectedLocation)
})

app.listen(port, () => {
  console.log(`Tour bd Server Running... ${port}`);
});