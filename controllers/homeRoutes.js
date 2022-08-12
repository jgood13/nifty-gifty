const router = require("express").Router();
const path = require("path");

const {
  Giftee,
  User,
  Registry,
  GiftOccasion,
  GiftIdea,
  RegistryGift,
} = require("../models");
const withAuth = require("../utils/auth");
const hbs2 = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer');






const emailRegistry = () => {
const sendEmail = document.getElementById('sendToEmail').value
const title = document.getElementById('title').getAttribute('data-title')
const gifts = document.querySelectorAll('.gifts').getAttribute('data-gifts')

console.log(sendEmail, title, gifts)

let mailOptions = {
  from:"NiftyGiftyEmail@gmail.com",
  to: sendEmail,
  subject: "Here is my giftlist/registy",
  template:'email',
  contest: {
    title: title ,
    gifts: gifts
    }
  }
}



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
      ],
    });
    if (!gifteeData) {
      res.status(404).json({ message: "no giftee with this id." });
    }

    const newGiftee = gifteeData.get({ plain: true });

    res.render("giftee", {
      ...newGiftee,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/registry/:id", async (req, res) => {
  try {
    const registryData = await Registry.findByPk(req.params.id, {
      include: [
        {
          model: RegistryGift,
        },
      ],
    });

    const registry = registryData.get({ plain: true });

    res.render("registry", {
      ...registry,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/giftoccasion/:id", async (req, res) => {
  try {
    const giftOccasionData = await GiftOccasion.findByPk(req.params.id, {
      include: {
        model: GiftIdea,
      },
    });

    const newGiftOccasion = giftOccasionData.get({ plain: true });

    res.render("giftOccasion", {
      ...newGiftOccasion,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
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
