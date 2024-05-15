const jwt = require("jsonwebtoken");
const config = require("../config/token");

exports.authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }
  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
