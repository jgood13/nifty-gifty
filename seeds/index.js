const sequelize = require("../config/connection");

const seedUsers = require("./user-seeds");
const seedGiftees = require("./giftee-seeds");
const seedGiftOccasions = require("./giftOccasion-seeds");
const seedRegistry = require("./registry-seeds");
const seedGiftIdeas = require("./giftIdea-seeds");
const seedRegistryGifts = require("./registryGift-seeds");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedGiftees();
  await seedGiftOccasions();
  await seedGiftIdeas();
  await seedRegistry();
  await seedRegistryGifts();
  process.exit(0);
};

seedDB();
