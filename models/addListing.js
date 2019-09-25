const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddListing = new Schema(
  {
    streetNum: { type: String, required: true },
    unitNum: { type: String },
    street: { type: String, required: true },
    suburbName: { type: String, required: true },
    postcode: { type: String, required: true },
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
