module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      title: DataTypes.STRING,
      imdbID: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      }
    });
  
    Movie.associate = function(models) {
      Movie.hasMany(models.Blurb);
      Movie.hasMany(models.User);
    };
  
    return Movie;
  };