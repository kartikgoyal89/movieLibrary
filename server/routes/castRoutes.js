const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const {
  addCast,
  getAllCasts,
  getACast,
  updateCast,
  deleteCast,
} = require("../controller/castCntrl");

router.post("/add", addCast);
router.get("/get-all", getAllCasts);
router.get("/get-cast/:id", getACast);
router.put("/update-cast/:id", authMiddleware, isAdmin, updateCast);
router.delete("/delete-cast/:id", authMiddleware, isAdmin, deleteCast);

module.exports = router;
