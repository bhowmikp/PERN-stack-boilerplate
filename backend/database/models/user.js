
require('dotenv').config();

const Sequelize = require('sequelize');
const EncryptedField = require('sequelize-encrypted');

const key = process.env.DB_ENCRYPTION;
const encrypted = EncryptedField(Sequelize, key);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    encrypted: encrypted.vault('encrypted'),

    name: DataTypes.STRING,
    email: encrypted.field('email', {
      type: DataTypes.STRING,
    }),

  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
