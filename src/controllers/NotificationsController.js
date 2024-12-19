const Notification = require("../models/Notification");

exports.createNotification = async (req, res, next) => {
  try {
    const { from, to, targetRate } = req.body;
    if (!from || !to || !targetRate) {
      return res
        .status(400)
        .json({ error: "from, to and targetRate are required" });
    }

    const notification = await Notification.create({
      userId: req.user.userId,
      from,
      to,
      targetRate,
      active: true,
    });

    res.status(201).json(notification);
  } catch (err) {
    next(err);
  }
};

exports.getNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find({
      userId: req.user.userId,
      active: true,
    });
    res.json(notifications);
  } catch (err) {
    next(err);
  }
};
