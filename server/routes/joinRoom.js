const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, function(req, res) {
  console.log("Authorize!");
  return res.sendStatus(200);
});

module.exports = router;
