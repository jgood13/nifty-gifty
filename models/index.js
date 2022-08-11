const User = require("./user");
const Giftee = require("./giftee");
const GiftIdea = require("./giftIdea");
const Registry = require("./registry");
const RegistryGift = require("./registryGift");
const GiftOccasion = require("./giftOccasion");

User.hasMany(Giftee, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Giftee.belongsTo(User, {
  foreignKey: "user_id",
});

Giftee.hasMany(GiftOccasion, {
  foreignKey: "giftee_id",
  onDelete: "CASCADE",
});

User.hasMany(Registry, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Registry.belongsTo(User, {
  foreignKey: "user_id",
});

Registry.hasMany(RegistryGift, {
  foreignKey: "registry_id",
  onDelete: "CASCADE",
});

RegistryGift.belongsTo(Registry, {
  foreignKey: "registry_id",
});

GiftOccasion.hasMany(GiftIdea, {
  foreignKey: "giftOccasion_id",
  onDelete: "CASCADE",
});

GiftIdea.belongsTo(GiftOccasion, {
  foreignKey: "giftOccasion_id",
});

module.exports = {
  User,
  Giftee,
  GiftIdea,
  Registry,
  RegistryGift,
  GiftOccasion,
};
