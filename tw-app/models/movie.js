module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      movie_Name: DataTypes.STRING
    });
  
    Movie.associate = function(models) {
      Movie.hasMany(models.Trigger);
      Movie.belongsTo(models.Blurb);
    };
  
    return Movie;
  };