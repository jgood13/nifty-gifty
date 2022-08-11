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

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const RegistryData = await RegistryGift.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!RegistryData) {
      res.status(404).json({ message: "No registry found with this id!" });
      return;
    }

    res.status(200).json(RegistryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
