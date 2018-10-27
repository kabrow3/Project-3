module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      title: DataTypes.STRING,
      imdbID: DataTypes.STRING
    });
  
    Movie.associate = function(models) {
      Movie.hasMany(models.Blurb);
      Movie.hasMany(models.User);
    };
  
    return Movie;
  };