const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
// Added to take into account the heroku port
const port = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = "mongodb://localhost:27017/property-listings";

// Use CORS
app.use(cors());
app.use(express.json());

// connect with the MONGDB Database
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Require the three routes
const addListing = require("./routes/addListing");
const homePage = require("./routes/homePage");
const findListing = require("./routes/findListing");
const updateListing = require("./routes/updateListing");

// Use the routes when the the route is called
app.use("/", homePage);
app.use("/addListing", addListing);
app.use("/findListing", findListing);
app.use("/updateListing", updateListing);

const connection = mongoose.connection;
// Open the connection
connection.once("open", () => {
  console.log("MongoDB connection established");
});
// Listen to port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
