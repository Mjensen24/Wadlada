'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: "User" },
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      purchaseDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expenseType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paidBack: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      receipt: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments');
  }
};
