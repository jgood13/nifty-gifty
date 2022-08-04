const { Registry } = require("../models");

const registryData = [
  {
    name: "Christmas List",
    user_id: "1",
  },
  {
    name: "Baby Shower",
    user_id: "2",
  },
  {
    name: "Wedding",
    user_id: "3",
  },
];

const seedRegistry = () => Registry.bulkCreate(registryData);

module.exports = seedRegistry;
