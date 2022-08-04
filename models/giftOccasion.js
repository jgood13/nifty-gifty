const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class GiftOccasion extends Model {}

GiftOccasion.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    occasion: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    occasionDate: {
      type: Datatypes.DATE,
    },
    giftee_id: {
      type: Datatypes.INTEGER,
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
    modelName: "giftOccasion",
  }
);

module.exports = GiftOccasion;
