const { RegistryGift } = require("../models");

const registryGiftData = [
  {
    gift: "Xbox",
    registry_id: 1,
  },
  {
    gift: "TV",
    registry_id: 1,
  },
  {
    gift: "Nike",
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
    gift: "Dishware",
    registry_id: 3,
  },
  {
    gift: "Silverware",
    registry_id: 3,
  },
  {
    gift: "Knives",
    registry_id: 3,
  },
  {
    gift: "Juicer",
    registry_id: 3,
  },
];

const seedRegistryGifts = () => RegistryGift.bulkCreate(registryGiftData);

module.exports = seedRegistryGifts;
