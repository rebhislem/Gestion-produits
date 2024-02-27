const express = require("express");
const router = express.Router();
const Produit = require("../models/produit");
const Categorie = require("../models/categorie");

/* CREATE */
router.post("/createproduit", async (req, res) => {
  try {
    const data = req.body;
    const ctg = await Categorie.findOne({ nom: data.categorie });
    if (ctg) {
      const pdt = new Produit(data);
      const savedPdt = await pdt.save();
      res.status(200).send(savedPdt);
    } else {
      res.status(404).send("Categorie n'est pas trouvé !");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

/* READ ALL */
router.get("/getallpdts", async (req, res) => {
  try {
    const allpdts = await Produit.find();
    res.status(200).send(allpdts);
  } catch (error) {
    res.status(400).send(err);
  }
});

/* READ BY ID */
router.get("/getpdtbyid/:id", async (req, res) => {
  try {
    const pdt = await Produit.findById(req.params.id);
    res.status(200).send(pdt);
  } catch (error) {
    res.status(400).send(err);
  }
});

/* SEARCH */
router.get("/search/:motcle", async (req, res) => {
  try {
    const regex = new RegExp(req.params.motcle, "i");
    const pdt = await Produit.findOne({ nom: regex });
    if (pdt) {
      res.status(200).send(pdt);
    } else {
      res.status(404).send("Produit n'est pas trouvé !");
    }
  } catch (error) {
    res.status(400).send(err);
  }
});

/* DELETE */
router.delete("/delete/:id", async (req, res) => {
  try {
    const pdt = await Produit.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(pdt);
  } catch (error) {
    res.status(400).send(err);
  }
});

/* UPDATE */
router.put("/update/:id", async (req, res) => {
  try {
    const newdata = req.body;
    const ctg = await Categorie.findOne({ nom: newdata.categorie });

    if (ctg) {
      const pdt = await Produit.findOneAndUpdate(
        { _id: req.params.id },
        newdata
      );
      res.status(200).send(pdt);
    } else {
      res.status(404).send("Categorie n'est pas trouvé !");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
