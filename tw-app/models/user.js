const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING(15),
        validation: {
          len: [2, 15],
          isAlphanumeric: true
        }
      },
      email: {
        type: DataTypes.STRING,
        validation: {
          isEmail: true
        }
      },
      password: DataTypes.STRING
    });
  
    // User.associate = function(models) {
    //   User.hasMany(models.Blurbs);
    // };
    return User;
  };
  