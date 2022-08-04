const { GiftOccasion } = require("../models");

const registryGiftData = [
  {
    occasion: "Shoes",
    occasionDate: 2022 - 09 - 18,
    giftee_id: 3,
  },
];

const seedGiftOccasion = () => GiftOccasion.bulkCreate(giftOccasionData);
module.exports = seedGiftOccasion;
