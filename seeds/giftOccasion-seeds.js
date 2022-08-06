const { GiftOccasion } = require("../models");

const giftOccasion = [
  {
    occasion: "Birthday",
    occasionDate: 2022 - 11 - 18,
    giftee_id: 1,
  },
  {
    occasion: "Christmas",
    occasionDate: 2022 - 12 - 25,
    giftee_id: 2,
  },
  {
    occasion: "Wedding",
    occasionDate: 2022 - 09 - 18,
    giftee_id: 3,
  },
  {
    occasion: "Anniversary",
    occasionDate: 2022 - 10 - 24,
    giftee_id: 4,
  },
  {
    occasion: "Baby Shower",
    occasionDate: 2022 - 12 - 25,
    giftee_id: 5,
  },
  {
    occasion: "Anniversary",
    occasionDate: 2022 - 12 - 18,
    giftee_id: 6,
  },
];

const seedGiftOccasions = () => GiftOccasion.bulkCreate(giftOccasionData);
module.exports = seedGiftOccasions;
