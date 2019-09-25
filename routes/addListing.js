const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

// Route for adding to the "addListing/" route
expressRouter.route("/").post((req, res) => {
  const streetNum = Number(req.body.streetNum);
  const unitNum = Number(req.body.unitNum);
  const street = req.body.street;
  const streetType = req.body.streetType;
  const suburbName = req.body.suburbName;
  const postcode = Number(req.body.postcode);
  const stateSelect = req.body.stateSelect;
  const propertyType = req.body.propertyType;
  const completeAddress = req.body.completeAddress;
  const newAddListing = new addListingModel({
    streetNum,
    unitNum,
    street,
    streetType,
    suburbName,
    postcode,
    stateSelect,
    propertyType,
    completeAddress
  });
  newAddListing
    .save()
    .then(() => res.json("Listing Added"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = expressRouter;
