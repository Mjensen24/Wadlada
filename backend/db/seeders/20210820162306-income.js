'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Incomes', [
      {
        userId: 1,
        title: "Bi-weekly Paycheck",
        amount: 500,
        date: new Date()
      },
      {
        userId: 1,
        title: "Cutting grass",
        amount: 100,
        date: new Date()
      },
      {
        userId: 1,
        title: "Birthday Money",
        amount: 300,
        date: new Date()
      },
      {
        userId: 1,
        title: "Lemonaid Stand",
        amount: 10,
        date: new Date()
      },
      {
        userId: 1,
        title: "Bi-weekly Paycheck",
        amount: 500,
        date: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
