const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req?.headers?.authorization?.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized / Token Expired!");
    }
  } else {
    throw new Error("There is no token attached to the header!");
  }
};

const isAdmin = async (req, res, next) => {
  const { email } = req.user;
  const admin = await userModel.findOne({ email });
  if (admin.role !== "admin") {
    throw new Error("You are not an Admin!");
  } else {
    next();
  }
};

module.exports = { authMiddleware, isAdmin };
