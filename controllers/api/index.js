const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./giftRoutes");

router.use("/users", userRoutes);
router.use("/gifts", giftRoutes);

module.exports = router;
