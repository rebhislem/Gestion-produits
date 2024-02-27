const express = require("express");
require("./config/connect");
const produitRoute = require("./routes/pdt");
const categorieRoute = require("./routes/ctg");
const app = express();
app.use(express.json());

app.use("/produit", produitRoute);
app.use("/categorie", categorieRoute);

app.listen(3000, () => {
  console.log("Server works");
});
