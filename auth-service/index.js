const express = require("express");
const app = express();
app.use(express.json());

let users = []; // Array de usuarios para esta demo

// Registro
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ error: "Usuario ya registrado" });
    }
    users.push({ username, password });
    res.status(201).json({ message: "Usuario registrado exitosamente" });
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: "Login exitoso" });
    } else {
        res.status(401).json({ error: "Credenciales incorrectas" });
    }
});

app.listen(3001, () => console.log("Auth Service corriendo en el puerto 3001"));
