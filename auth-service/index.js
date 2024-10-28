const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Página de registro
app.get('/register', (req, res) => {
    res.send(`
        <html>
            <head><title>Registrar Usuario</title></head>
            <body>
                <h1>Registrar Usuario</h1>
                <form method="POST" action="/register">
                    <label for="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required><br>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required><br>
                    <button type="submit">Registrar</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/register', (req, res) => {
    // Código para registrar el usuario
    res.send('Usuario registrado con éxito.');
});

// Página de inicio de sesión
app.get('/login', (req, res) => {
    res.send(`
        <html>
            <head><title>Iniciar Sesión</title></head>
            <body>
                <h1>Iniciar Sesión</h1>
                <form method="POST" action="/login">
                    <label for="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required><br>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required><br>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/login', (req, res) => {
    // Código para iniciar sesión
    res.send('Iniciado sesión con éxito.');
});

app.listen(3001, () => {
    console.log('Auth Service corriendo en http://localhost:3001');
});
