const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(require("cors")());

// Routes
const authRoutes = require("./routes/auth");
const annonceRoutes = require("./routes/annonce"); // ✅ ajoute cette ligne

app.use("/api/auth", authRoutes);
app.use("/api/annonces", annonceRoutes); // ✅ branche les annonces ici

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"));

// Lancer le serveur
app.listen(5000, () => console.log("Serveur lancé sur le port 5000"));
