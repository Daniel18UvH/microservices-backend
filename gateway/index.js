const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// Redirigir a Auth Service
app.use("/auth", (req, res) => {
    axios({
        method: req.method,
        url: `http://localhost:3001${req.url}`,
        data: req.body
    }).then(response => res.json(response.data))
    .catch(error => res.status(error.response?.status || 500).json(error.response?.data || "Error"));
});

// Redirigir a User Service
app.use("/user", (req, res) => {
    axios({
        method: req.method,
        url: `http://localhost:3002${req.url}`,
        data: req.body
    }).then(response => res.json(response.data))
    .catch(error => res.status(error.response?.status || 500).json(error.response?.data || "Error"));
});

// Redirigir a Booking Service
app.use("/booking", (req, res) => {
    axios({
        method: req.method,
        url: `http://localhost:3003${req.url}`,
        data: req.body
    }).then(response => res.json(response.data))
    .catch(error => res.status(error.response?.status || 500).json(error.response?.data || "Error"));
});

app.listen(3000, () => console.log("Gateway corriendo en el puerto 3000"));
