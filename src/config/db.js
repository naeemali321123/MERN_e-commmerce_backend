const mongoose = require("mongoose");
require("dotenv").config();

const setupDB = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}cluster0.vsrrg4r.mongodb.net/e-comm?retryWrites=true&w=majority`,
    () => {
      console.log("MongoDB is working Properly");
    }
  );
};
module.exports = setupDB;
