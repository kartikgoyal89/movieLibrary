const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const {
  addCrew,
  getAllCrews,
  getACrew,
  updateCrew,
  deleteCrew,
} = require("../controller/crewCntrl");

router.post("/add", addCrew);
router.get("/get-all", getAllCrews);
router.get("/get-crew/:id", getACrew);
router.put("/update-crew/:id", authMiddleware, isAdmin, updateCrew);
router.delete("/delete-crew/:id", authMiddleware, isAdmin, deleteCrew);

module.exports = router;
