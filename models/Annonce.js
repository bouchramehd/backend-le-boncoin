const mongoose = require("mongoose");

const AnnonceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Annonce", AnnonceSchema);
