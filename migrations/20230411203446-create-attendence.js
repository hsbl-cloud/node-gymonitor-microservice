'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attendences', {
      id: {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        unique: true
      },
      placeId: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.JSONB
      },
      checkIn: {
        type: Sequelize.DATE
      },
      checkOut: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('attendences');
  }
};