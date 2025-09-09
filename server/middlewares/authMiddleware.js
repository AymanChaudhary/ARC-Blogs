const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = {
  verifyToken: async (req, res, next) => {
    const token = req.cookies.BlogsToken;
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(400).json({ message: "Invalid token" });
    }
  },
  authorizeRole: (role) => {
    return (req, res, next) => {
        if (req.user.role !== role){
            return res.status(403).json({message: "Access Denied"});
        }
        next();
    }
  }
};

module.exports = authMiddleware;
