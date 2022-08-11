const router = require("express").Router();
const { GiftOccasion } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newOccasion = await Registry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRegistry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const RegistryData = await GiftOccasion.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!RegistryData) {
      res.status(404).json({ message: "No gift occasion found with this id!" });
      return;
    }

    res.status(200).json(RegistryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
