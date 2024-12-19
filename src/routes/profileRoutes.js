const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileCOntroller");

router.get("/", auth, getProfile);
router.put("/", auth, updateProfile);

module.exports = router;
