const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

// Route for adding to the "/" route
expressRouter.route("/").get((req, res) => {
  addListingModel
    .find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = expressRouter;
