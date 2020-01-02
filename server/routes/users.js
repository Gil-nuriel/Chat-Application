const User = require("../models/users");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async function(req, res) {
  const { name, email, password } = req.body;
  //check if email exist in DB
  let user = await User.findOne({ email });
  if (user) {
    return res.status(405).json("User allready exist");
  }
  //create the user
  const newUser = new User({
    name,
    email,
    password
  });
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  //save the user
  await newUser.save();
  return res.json("save");
});

module.exports = router;
