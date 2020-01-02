const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json("token does not exist");
  try {
    const decoded = jwt.verify(token, process.env.JWT_Private_Key);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json("token expired");
  }
}

module.exports = auth;
