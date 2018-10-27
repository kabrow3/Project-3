module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      title: DataTypes.STRING,
      imdbID: {
        type: DataTypes.STRING,
        primaryKey: true // Automatically gets converted to SERIAL for postgres
      }
    });
  
    Movie.associate = function(models) {
      Movie.hasMany(models.Blurb);
      Movie.hasMany(models.User);
    };
  
    return Movie;
  };