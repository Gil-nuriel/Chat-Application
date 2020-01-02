const jwt = require("jsonwebtoken");
const User = require("../models/users");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async function(req, res) {
  //check to see if email exist
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("one of the fields is incomplete");
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }
  //compare the passwords
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    return res.status(401).send("Invalid email or password.");
  }
  //create jwt
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    process.env.JWT_Private_Key,
    /////////////////
    (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          password: user.password
        }
      });
    }
  );
  return res.header("x-auth-token", token);
});

module.exports = router;
