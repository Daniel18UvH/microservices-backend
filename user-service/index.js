const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Página de crear perfil
app.get('/profile', (req, res) => {
    res.send(`
        <html>
            <head><title>Crear Perfil</title></head>
            <body>
                <h1>Crear Perfil</h1>
                <form method="POST" action="/profile">
                    <label for="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required><br>
                    <label for="bio">Biografía:</label>
                    <textarea id="bio" name="bio" required></textarea><br>
                    <button type="submit">Crear Perfil</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/profile', (req, res) => {
    // Código para crear/actualizar el perfil
    res.send('Perfil creado con éxito.');
});

app.listen(3002, () => {
    console.log('User Service corriendo en http://localhost:3002');
});
