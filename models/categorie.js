const mongoose = require("mongoose");

const Categorie = mongoose.model("Categorie", {
  nom: {
    type: String,
  },
});

module.exports = Categorie;
