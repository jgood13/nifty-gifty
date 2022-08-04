const router = require("express").Router();
const { Gift, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const giftData = await Gift.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const gifts = giftData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      gifts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/gift/:id", async (req, res) => {
  try {
    const giftData = await Gift.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const gift = giftData.get({ plain: true });

    res.render("gift", {
      ...gift,
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
      include: [{ model: Gift }],
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
