'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE,
    expenseType: DataTypes.STRING,
    paidBack: DataTypes.BOOLEAN,
    receipt: DataTypes.BOOLEAN,
    approved: DataTypes.BOOLEAN
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};