module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING(15),
        // maybe remove
        // unique: true,
        validation: {
          len: [2, 15],
          isAlphanumeric: true
        }
      },
      email: {
        type: DataTypes.STRING,
        // maybe remove
        // unique: true,
        validation: {
          isEmail: true
        }
      },
      password: DataTypes.STRING
    });
  
    User.associate = function(models) {
      User.hasMany(models.Blurb);
      // for favourite movies list
      User.hasMany(models.Movie);
    };
    return User;
  };
  