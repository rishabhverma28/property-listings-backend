const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

// expressRouter.route("/").get((req, res) => {
//   addListingModel
//     .find()
//     .then(sec => res.json(sec))
//     .catch(err => res.status(400).json("Error: " + err));
// });

expressRouter.route("/").post((req, res) => {
  console.log(req.body);
  const streetNum = req.body.streetNum;
  const unitNum = req.body.unitNum;
  const street = req.body.street;
  const streetType = req.body.streetType;
  const suburbName = req.body.suburbName;
  const postcode = req.body.postcode;
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
  console.log("being sent: ", newAddListing);
  newAddListing
    .save()
    .then(() => res.json("Listing Added"))
    .then(err => res.status(400).json("Error: " + err));
});

module.exports = expressRouter;
