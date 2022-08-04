const User = require("./user");
const Giftee = require("./giftee");
const GiftIdea = require("./giftIdea");
const Registry = require("./registry");

User.hasMany(Giftee, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Giftee.belongsTo(User, {
  foreignKey: "user_id",
});

Giftee.hasMany(GiftIdea, {
  foreignKey: "giftee_id",
  onDelete: "CASCADE",
});

GiftIdea.belongsTo(Giftee, {
  foreignKey: "giftee_id",
});

User.hasMany(Registry, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Registry.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Giftee,
  GiftIdea,
  Registry,
};
