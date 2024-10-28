const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Página de reservar
app.get('/book', (req, res) => {
    res.send(`
        <html>
            <head><title>Reservar</title></head>
            <body>
                <h1>Reservar</h1>
                <form method="POST" action="/book">
                    <label for="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required><br>
                    <label for="date">Fecha de Reserva:</label>
                    <input type="date" id="date" name="date" required><br>
                    <button type="submit">Reservar</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/book', (req, res) => {
    // Código para crear una reserva
    res.send('Reserva creada con éxito.');
});

app.listen(3003, () => {
    console.log('Booking Service corriendo en http://localhost:3003');
});
