const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Registry extends Model {}

Registry.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    desiredGifts: {
      type: Datatypes.TEXT,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "resistry",
  }
);

module.exports = Registry;
