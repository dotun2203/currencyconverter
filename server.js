require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/authRoutes");
const profileRoutes = require("./src/routes/profileRoutes");
const currencyRoutes = require("./src/routes/currencyRoutes");
const favoriteRoutes = require("./src/routes/favouritesRoutes");
const notificationsRoutes = require("./src/routes/notificationsRoutes");

const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// ROUTES

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/currency", currencyRoutes);
app.use("/api/v1/favorites", favoriteRoutes);
app.use("/api/v1/notifications", notificationsRoutes);

// GLOBAL ERROR HANDLER
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
