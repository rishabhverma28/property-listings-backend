const expressRouter = require("express").Router();
const addListingModel = require("../models/addListing");

expressRouter.route("/").post((req, res) => {
  console.log("vbvbvbv", req.body);
  addListingModel
    .find({
      $text: {
        $search: new RegExp("/" + req.body.query + "/"),
        $caseSensitive: false
      }
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = expressRouter;
