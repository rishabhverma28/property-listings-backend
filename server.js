const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// const URI_MONGO = process.env.ATLAS_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// var db = mongoose.connection;

const addListing = require("./routes/addListing");
const homePage = require("./routes/homePage");
const findListing = require("./routes/findListing");

app.use("/", homePage);
app.use("/addListing", addListing);
app.use("/findListing", findListing);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
