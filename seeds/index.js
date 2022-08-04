const sequelize = require("../config/connection");

const seedUsers = require("./user-seeds");
const seedGiftees = require("./giftee-seeds");
const seedRegistry = require("./giftee-seeds");
const seedGiftIdeas = require("./giftIdea-seeds");
const seedGiftOccasions = require("./giftOccasion-seeds");
const seedRegistryGifts = require("./registryGift-seeds");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedGiftees();
  await seedGiftIdeas();
  await seedRegistry();
  await seedRegistryGifts();
  await seedGiftOccasions();
  process.exit(0);
};

seedDB();
