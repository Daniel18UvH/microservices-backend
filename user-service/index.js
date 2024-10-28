const express = require("express");
const app = express();
app.use(express.json());

let profiles = []; // Array de perfiles de usuario

// Obtener perfil de usuario
app.get("/profile/:username", (req, res) => {
    const { username } = req.params;
    const profile = profiles.find(p => p.username === username);
    if (profile) {
        res.status(200).json(profile);
    } else {
        res.status(404).json({ error: "Perfil no encontrado" });
    }
});

// Crear o actualizar perfil
app.post("/profile", (req, res) => {
    const { username, bio } = req.body;
    const profileIndex = profiles.findIndex(p => p.username === username);
    if (profileIndex > -1) {
        profiles[profileIndex].bio = bio;
    } else {
        profiles.push({ username, bio });
    }
    res.status(201).json({ message: "Perfil creado/actualizado" });
});

app.listen(3002, () => console.log("User Service corriendo en el puerto 3002"));
