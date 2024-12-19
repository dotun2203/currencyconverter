const express = require("express");
const auth = require("../middlewares/authMiddleware");
const {
  getNotifications,
  createNotification,
} = require("../controllers/NotificationsController");
const router = express.Router();

router.post("/", auth, createNotification);
router.get("/", auth, getNotifications);

module.exports = router;
