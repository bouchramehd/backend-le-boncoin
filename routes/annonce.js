const express = require("express");
const Annonce = require("../models/Annonce");
const verifyToken = require("../middleware/auth");

const router = express.Router();

// ➕ Créer une annonce (protégée)
router.post("/", verifyToken, async (req, res) => {
  const { title, description, price, category } = req.body;

  try {
    const newAnnonce = new Annonce({
      title,
      description,
      price,
      category,
      author: req.user.id
    });

    const savedAnnonce = await newAnnonce.save();
    res.status(201).json(savedAnnonce);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// 📄 Voir toutes les annonces (publique)
router.get("/", async (req, res) => {
  try {
    const annonces = await Annonce.find().populate("author", "username email");
    res.json(annonces);
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération", error: err.message });
  }
});

// ❌ Supprimer une annonce par ID (non protégé pour le moment)
router.delete("/:id", async (req, res) => {
  try {
    await Annonce.findByIdAndDelete(req.params.id);
    res.json({ message: "Annonce supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur suppression", error: err.message });
  }
});

// ✏️ Modifier une annonce par ID
router.put("/:id", async (req, res) => {
  const { title, description, price, category } = req.body;

  try {
    const updatedAnnonce = await Annonce.findByIdAndUpdate(
      req.params.id,
      { title, description, price, category },
      { new: true }
    );
    res.json(updatedAnnonce);
  } catch (err) {
    res.status(500).json({ message: "Erreur modification", error: err.message });
  }
});

module.exports = router;
