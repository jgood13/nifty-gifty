const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GiftIdea extends Model {}

GiftIdea.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gift: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    giftOccasion_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "giftOccasion",
        key: "id",
      },
    },
    giftee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "giftee",
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
