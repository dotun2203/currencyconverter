const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

const {
  convertCurrency,
  getHistoricalData,
} = require("../controllers/currencyController");

router.get("/convert", auth, convertCurrency);
router.get("/historical", auth, getHistoricalData);

module.exports = router;
