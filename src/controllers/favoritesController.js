const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    if (!from || !to) {
      return res.status(400).json({ error: "from and to currencies required" });
    }

    from = from.toUpperCase();
    to = to.toUpperCase();

    const exists = await Favorite.findOne({
      userId: req.user.userId,
      from,
      to,
    });

    if (exists)
      return res.status(400).json({ error: "favorite already exists" });

    const favorite = await Favorite.create({
      userId: req.user.userId,
      from,
      to,
    });
    res.status(200).json(favorite);
  } catch (err) {
    next(err);
  }
};

exports.getFavorites = async (req, res, next) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.userId });
    res.json(favorites);
  } catch (err) {
    next(err);
  }
};
