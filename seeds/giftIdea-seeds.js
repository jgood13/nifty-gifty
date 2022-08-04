const { GiftIdea } = require("../models");

const giftIdeaData = [
  {
    gift: "Shoes",
    giftOccasion_id: 1,
  },
  {
    gift: "TV",
    giftOccasion_id: 1,
  },
  {
    gift: "Sweater",
    giftOccasion_id: 2,
  },
  {
    gift: "Video Game",
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
    gift: "Baby Clothes",
    giftOccasion_id: 5,
  },
  {
    gift: "Baby Blanket",
    giftOccasion_id: 5,
  },
  {
    gift: "Diamond earings",
    giftOccasion_id: 4,
  },
  {
    gift: "Flowers",
    giftOccasion_id: 6,
  },
];

const seedGiftIdeas = () => GiftIdea.bulkCreate(giftIdeaData);
module.exports = seedGiftIdeas;
