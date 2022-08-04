const { Giftee } = require("../models");

const gifteeData = [
  {
    name: "Mom",
    user_id: 1,
  },
  {
    name: "Dad",
    user_id: 1,
  },
  {
    name: "Bob",
    user_id: 1,
  },
  {
    name: "Rebecca",
    user_id: 2,
  },
  {
    name: "Jessica",
    user_id: 3,
  },
  {
    name: "Terry",
    user_id: 3,
  },
  {
    name: "Josh",
    user_id: 4,
  },
  {
    name: "Mandrick",
    user_id: 4,
  },
];

const seedGiftees = () => Giftee.bulkCreate(gifteeData);

module.exports = seedGiftees;
