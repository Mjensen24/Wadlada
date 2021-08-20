'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PayBacks', [
      {
        userId: 1,
        title: 'Video game',
        amount: 60,
        date: new Date(),
        who: "Blake",
        dueDate: new Date(),
        paidBack: false
      },
      {
        userId: 1,
        title: 'Lunch',
        amount: 20,
        date: new Date(),
        who: "Mack",
        dueDate: new Date(),
        paidBack: false
      },
      {
        userId: 1,
        title: 'Rent',
        amount: 1000,
        date: new Date(),
        who: "Drew",
        dueDate: new Date(),
        paidBack: true
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
