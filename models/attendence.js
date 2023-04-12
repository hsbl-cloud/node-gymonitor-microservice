'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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