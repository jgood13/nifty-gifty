const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class RegistryGift extends Model {}

Registry.init(
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
    registry_id: {
      type: Datatypes.INTEGER,
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
    modelName: "resistryGift",
  }
);

module.exports = RegistryGift;
