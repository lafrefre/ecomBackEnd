const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: Datatype.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // tag_name
    tag_name: {
      type: Datatype.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
