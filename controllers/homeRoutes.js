const router = require("express").Router();
const { Giftee, User, Registry, GiftOccasion, GiftIdea } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/giftee/:id", async (req, res) => {
  try {
    const gifteeData = await Giftee.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id"],
        },
        {
          model: GiftOccasion,
        },
        {
          model: GiftIdea,
        },
      ],
    });

    const giftee = gifteeData.get({ plain: true });

    res.render("giftee", {
      ...giftee,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Registry }, { model: Giftee }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
