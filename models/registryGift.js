const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RegistryGift extends Model {}

RegistryGift.init(
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
    registry_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "registry",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "registryGift",
  }
);

module.exports = RegistryGift;
