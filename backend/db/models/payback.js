'use strict';
module.exports = (sequelize, DataTypes) => {
  const PayBack = sequelize.define('PayBack', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    who: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    payedBack: DataTypes.BOOLEAN
  }, {});
  PayBack.associate = function(models) {
    // associations can be defined here
  };
  return PayBack;
};