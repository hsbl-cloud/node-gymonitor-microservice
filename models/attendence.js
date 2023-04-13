'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendence extends Model {

    static associate(models) {
      this.belongsTo(models.place, { foreignKey : 'placeId'})
    }
  }
  attendence.init({
    placeId: DataTypes.UUID,
    name: DataTypes.STRING,
    detail: DataTypes.JSONB,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'attendence',
  });
  return attendence;
};