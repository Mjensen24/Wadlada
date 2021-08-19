'use strict';
module.exports = (sequelize, DataTypes) => {
  const Income = sequelize.define('Income', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  Income.associate = function(models) {
    // associations can be defined here
  };
  return Income;
};