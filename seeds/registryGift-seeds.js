const { RegistryGift } = require("../models");

const registryGiftData = [
  {
    gift: "Shoes",
    registry_id: 1,
  },
  {
    gift: "TV",
    registry_id: 1,
  },
  {
    gift: "Sweater",
    registry_id: 1,
  },
  {
    gift: "Video Game",
    registry_id: 1,
  },
  {
    gift: "Crib",
    registry_id: 2,
  },
  {
    gift: "Diapers",
    registry_id: 2,
  },
  {
    gift: "Baby Clothes",
    registry_id: 2,
  },
  {
    gift: "Baby Blanket",
    registry_id: 1,
  },
  {
    gift: "Dishware",
    registry_id: 3,
  },
  {
    gift: "Wine Glasses",
    registry_id: 3,
  },
  {
    gift: "Kitchen Knives",
    registry_id: 3,
  },
  {
    gift: "Juicer",
    registry_id: 3,
  },
];

const seedRegistryGifts = () => RegistryGift.bulkCreate(registryGiftData);

module.exports = seedRegistryGifts;
