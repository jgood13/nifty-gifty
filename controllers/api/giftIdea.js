const router = require("express").Router();
const { GiftIdea } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newGift = await GiftIdea.create({
      ...req.body,
    });

    res.status(200).json(newGift);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteGift = await GiftIdea.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteGift) {
      res.status(404).json({ message: "No gift occasion found with this id!" });
      return;
    }

    res.status(200).json(deleteGift);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
