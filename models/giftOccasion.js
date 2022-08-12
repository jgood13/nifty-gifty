const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GiftOccasion extends Model {}

GiftOccasion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occasionDate: {
      type: DataTypes.DATEONLY,
    },
    remind: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
    modelName: "giftOccasion",
  }
);

module.exports = GiftOccasion;
