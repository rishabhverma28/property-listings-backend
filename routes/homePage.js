const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

expressRouter.route("/").get((req, res) => {
  console.log("Callllllll");
  addListingModel
    .find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = expressRouter;
