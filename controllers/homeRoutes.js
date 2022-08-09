const router = require("express").Router();
const { Giftee, User, Registry } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const gifteeData = await Giftee.findAll({
      include: [
        {
          model: User,
          attributes: ["id"],
        },
      ],
    });

    const giftees = gifteeData.map((giftee) => giftee.get({ plain: true }));

    res.render("homepage", {
      giftees,
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
      ],
    });

    const giftee = gifteeData.get({ plain: true });

    res.render("gift", {
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
