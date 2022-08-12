const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gifteeRoutes = require("./gifteeRoutes");
const registryRoutes = require("./registryRoutes");
const registryGiftRoutes = require("./registryGiftRoutes");
const giftOccasionRoutes = require("./giftOccasionRoutes");
const sendRoutes = require('./send')

router.use("/users", userRoutes);
router.use("/giftee", gifteeRoutes);
router.use("/registry", registryRoutes);
router.use("/registrygift", registryGiftRoutes);
router.use("/giftoccasion", giftOccasionRoutes);
router.use("/send", sendRoutes)

module.exports = router;
