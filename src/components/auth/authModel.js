const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phone: String,
  profilePicUrl: String,
});

module.exports = mongoose.model("users", userSchema);
