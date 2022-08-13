const { GiftIdea } = require("../models");

const giftIdeaData = [
  {
    gift: "Playstation",
    giftOccasion_id: 1,
  },
  {
    gift: "TV",
    giftOccasion_id: 1,
  },
  {
    gift: "Car",
    giftOccasion_id: 2,
  },
  {
    gift: "Mattress",
    giftOccasion_id: 2,
  },
  {
    gift: "Crib",
    giftOccasion_id: 5,
  },
  {
    gift: "Diapers",
    giftOccasion_id: 5,
  },
  {
    gift: "Earings",
    giftOccasion_id: 4,
  },
  {
    gift: "Flowers",
    giftOccasion_id: 6,
    giftee_id: 1,
  },
];

const seedGiftIdeas = () => GiftIdea.bulkCreate(giftIdeaData);
module.exports = seedGiftIdeas;
