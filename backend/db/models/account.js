'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    balance: DataTypes.INTEGER
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};