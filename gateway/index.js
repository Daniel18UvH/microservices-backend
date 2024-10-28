const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos (opcional)
app.use(express.static(path.join(__dirname, 'public')));

// Página de inicio
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Microservicios Gateway</title>
            </head>
            <body>
                <h1>Bienvenido al Gateway de Microservicios</h1>
                <ul>
                    <li><a href="/auth/register">Registrar Usuario</a></li>
                    <li><a href="/auth/login">Iniciar Sesión</a></li>
                    <li><a href="/user/profile">Crear Perfil</a></li>
                    <li><a href="/booking/book">Reservar</a></li>
                </ul>
            </body>
        </html>
    `);
});

// Redirige las peticiones de /auth al Auth Service
app.use('/auth', createProxyMiddleware({
    target: 'http://localhost:3001', // Puerto donde corre el Auth Service
    changeOrigin: true,
}));

// Redirige las peticiones de /user al User Service
app.use('/user', createProxyMiddleware({
    target: 'http://localhost:3002', // Puerto donde corre el User Service
    changeOrigin: true,
}));

// Redirige las peticiones de /booking al Booking Service
app.use('/booking', createProxyMiddleware({
    target: 'http://localhost:3003', // Puerto donde corre el Booking Service
    changeOrigin: true,
}));

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Gateway corriendo en http://localhost:3000');
});
