const router = require("express").Router();
const { RegistryGift } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newRegistryGift = await RegistryGift.create({
      ...req.body,
    });

    res.status(200).json(newRegistryGift);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
