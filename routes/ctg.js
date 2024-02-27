const express = require("express");
const router = express.Router();
const Categorie = require("../models/categorie");

router.post("/createctg", async (req, res) => {
  try {
    const data = req.body;
    const ctg = new Categorie(data);
    const savedCtg = await ctg.save();
    res.status(200).send(savedCtg);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/getallctgs", async (req, res) => {
  try {
    const allctgs = await Categorie.find();
    res.status(200).send(allctgs);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/getctgbyid/:id", async (req, res) => {
  try {
    const ctg = await Categorie.findById(req.params.id);
    res.status(200).send(ctg);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const newdata = req.body;
    const ctg = await Categorie.findOneAndUpdate(
      { _id: req.params.id },
      newdata
    );
    res.status(200).send(ctg);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const ctg = await Categorie.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(ctg);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
