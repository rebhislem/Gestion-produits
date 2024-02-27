const mongoose = require("mongoose");

const Produit = mongoose.model("Produit", {
  nom: {
    type: String,
  },
  quantite: {
    type: Number,
  },
  prix: {
    type: Number,
  },
  categorie: {
    type: String,
  },
});

module.exports = Produit;
