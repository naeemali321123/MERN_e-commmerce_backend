const authModel = require("./authModel");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

const register = async (req, resp) => {
  const User = new authModel(req.body);
  const currentUser = await User.save(req.body);
  if (currentUser) {
    jwt.sign({ currentUser }, jwtKey, { expiresIn: "12h" }, (err, token) => {
      if (err) {
        return resp.json({ Error: "something went wrong" });
      }
      return resp.status(200).json({ currentUser, token: token });
    });
  } else {
    return resp.send("Plz Fill the all input fields ");
  }
};

const login = async (req, resp) => {
  if (req.body.email && req.body.password) {
    const currentUser = await user.findOne(req.body).select(-"password");
    if (currentUser) {
      jwt.sign({ currentUser }, jwtKey, { expiresIn: "12h" }, (err, token) => {
        if (err) {
          resp.send({ Error: "something went wrong" });
        }
        resp.send({ currentUser, token: token });
      });
    } else {
      resp.send("Email or Passwor is Invalid");
    }
  } else {
    resp.send("Your Email or Password is Empty");
  }
};

module.exports = {
  login,
  register,
};
