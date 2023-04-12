'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    static associate(models) {
      // define association here
    }
  }
  place.init({
    name: DataTypes.STRING,
    detail: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'place',
  });
  return place;
};