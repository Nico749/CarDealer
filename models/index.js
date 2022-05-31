const Car = require('./Car')
const User = require('./User');

//user can have many cars
User.hasMany(Car, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Car, User };
