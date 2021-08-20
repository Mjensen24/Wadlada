'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        userId: 1,
        title: 'Party Supplies',
        amount: 30,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Hall Fee',
        amount: 100,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Milk',
        amount: 10,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: false
      },
      {
        userId: 1,
        title: 'Work Lunch',
        amount: 150,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'New Suit',
        amount: 500,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: false,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Car Payment',
        amount: 700,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Rent',
        amount: 2000,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Milk',
        amount: 10,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'New Computer',
        amount: 300,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Shirt',
        amount: 20,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Art',
        amount: 200,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Juice',
        amount: 5,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Office Supplies',
        amount: 2000,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Xbox Live',
        amount: 20,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Socks',
        amount: 12,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: false
      },
      {
        userId: 1,
        title: 'Adobe',
        amount: 25,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Coffee',
        amount: 5,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: true,
        receipt: false,
        approved: true
      },
      {
        userId: 1,
        title: 'Office Pizza Party',
        amount: 120,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Work Lunch',
        amount: 80,
        purchaseDate: new Date(),
        expenseType: "buisness",
        paidBack: true,
        receipt: true,
        approved: true
      },
      {
        userId: 1,
        title: 'Gaming Chair',
        amount: 300,
        purchaseDate: new Date(),
        expenseType: "personal",
        paidBack: false,
        receipt: false,
        approved: false
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
