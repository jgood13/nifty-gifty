const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class GiftIdea extends Model {}

GiftIdea.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gift: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    giftOccasion_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "giftOccasion",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "giftIdea",
  }
);

module.exports = GiftIdea;
