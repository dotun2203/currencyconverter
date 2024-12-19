const express = require("express");

const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoritesController");

router.post("/", auth, addFavorite);
router.get("/", auth, getFavorites);

module.exports = router;
