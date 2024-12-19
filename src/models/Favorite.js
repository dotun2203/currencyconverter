const { default: mongoose } = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
