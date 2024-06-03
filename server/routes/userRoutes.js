const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
  getAUser,
  getAllUsers,
} = require("../controller/userCntrl");

router.post("/register", register);
router.post("/login", login);
router.get("/get-all", authMiddleware, isAdmin, getAllUsers);
router.get("/get-user/:id", authMiddleware, isAdmin, getAUser);
router.put("/update-user/:id", authMiddleware, updateUser);
router.delete("/delete-user/:id", authMiddleware, isAdmin, deleteUser);

module.exports = router;
