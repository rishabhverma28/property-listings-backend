const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

expressRouter.route("/").get((req, res) => {
  console.log("Callllllll");
  addListingModel
    .find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = expressRouter;
