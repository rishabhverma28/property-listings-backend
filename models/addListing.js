const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Converting to Number when required
const AddListing = new Schema(
  {
    streetNum: { type: Number, required: true },
    unitNum: { type: Number },
    street: { type: String, required: true },
    suburbName: { type: String, required: true },
    postcode: { type: Number, required: true },
    stateSelect: { type: String, required: true },
    streetType: { type: String },
    propertyType: { type: String },
    completeAddress: { type: String, required: true, text: true }
  },
  {
    timestamps: true
  }
);
const AddListings = mongoose.model("AddListing", AddListing);

module.exports = AddListings;
