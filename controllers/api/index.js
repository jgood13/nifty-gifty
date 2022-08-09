const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gifteeRoutes = require("./gifteeRoutes");

router.use("/users", userRoutes);
router.use("/gifts", gifteeRoutes);

module.exports = router;
