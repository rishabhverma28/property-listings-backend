const expressRouter = require("express").Router();
const ListingModel = require("../models/addListing");

// Route for adding to the "addListing/" route
expressRouter.route("/").put((req, res) => {
  ListingModel.findByIdAndUpdate(
    req.body._id,
    {
      streetNum: Number(req.body.streetNum),
      unitNum: Number(req.body.unitNum),
      street: req.body.street,
      streetType: req.body.streetType,
      suburbName: req.body.suburbName,
      postcode: Number(req.body.postcode),
      stateSelect: req.body.stateSelect,
      propertyType: req.body.propertyType,
      completeAddress: req.body.completeAddress
    },
    { new: true }
  )
    .then(listing => {
      if (!listing) {
        res.status(404).send({ message: `Listing not found` });
      }
      res.send(listing);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({ message: `Listing not found` });
      }
      return res.status(500).send({ message: "Something went wrong" });
    });
});

module.exports = expressRouter;
