// Models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Prokopishena.University.Personalized-Fitness-Coaching-Platform.Core/db');
const User = require('./User');

const Client = sequelize.define('Client', {
  client_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  weight: {
    type: DataTypes.DECIMAL
  },
  height: {
    type: DataTypes.DECIMAL
  },
  birth_date: {
    type: DataTypes.DATE
  },
  goal: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'clients',
  timestamps: false
});

// Встановлюємо зв'язок між Клієнтом та Користувачем
Client.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Client;
