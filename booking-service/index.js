const express = require("express");
const app = express();
app.use(express.json());

let bookings = []; // Array de reservas

// Crear reserva
app.post("/book", (req, res) => {
    const { username, date } = req.body;
    bookings.push({ username, date });
    res.status(201).json({ message: "Reserva creada" });
});

// Obtener reservas de un usuario
app.get("/bookings/:username", (req, res) => {
    const { username } = req.params;
    const userBookings = bookings.filter(b => b.username === username);
    res.status(200).json(userBookings);
});

app.listen(3003, () => console.log("Booking Service corriendo en el puerto 3003"));
