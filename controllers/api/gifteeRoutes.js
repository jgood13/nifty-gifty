const router = require("express").Router();
const { Giftee } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newGiftee = await Giftee.create({
      name: req.body.name,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGiftee);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    const gifteeData = await Giftee.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gifteeData) {
      res.status(404).json({ message: "No gift found with this id!" });
      return;
    }

    res.status(200).json(gifteeData);
  } catch (err) {
    console.log(err, "Delete");
    res.status(500).json(err);
  }
});

module.exports = router;
