const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gifteeRoutes = require("./gifteeRoutes");
const registryRoutes = require("./registryRoutes");
const registryGiftRoutes = require("./registryGiftRoutes");

router.use("/users", userRoutes);
router.use("/giftee", gifteeRoutes);
router.use("/registry", registryRoutes);
router.use("/registrygift", registryGiftRoutes);

module.exports = router;
