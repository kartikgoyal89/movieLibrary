const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const {
  addMovie,
  getAllMovies,
  getAMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movieCntrl");

router.post("/add", addMovie);
router.get("/get-all", getAllMovies);
router.get("/get-movie/:id", getAMovie);
router.put("/update-movie/:id", authMiddleware, isAdmin, updateMovie);
router.delete("/delete-movie/:id", authMiddleware, isAdmin, deleteMovie);

module.exports = router;
