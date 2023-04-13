'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    static associate(models) {
      this.hasMany(models.attendence , { foreignKey : 'placeId'})
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