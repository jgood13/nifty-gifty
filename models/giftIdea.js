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
    occasion: {
      type: Datatypes.STRING,
    },
    occasionDate: {
      type: Datatypes.DATE,
    },
    gift: {
      type: Datatypes.STRING,
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
    timestamps,
    freezeTableName,
    underscored,
    modelName: "giftIdea",
  }
);

module.exports = GiftIdea;
