module.exports = function(sequelize, DataTypes) {
    var Blurb = sequelize.define("Blurb", {
      blurb: DataTypes.TEXT
    });
  
    Blurb.associate = function(models) {
      Blurb.belongsTo(models.User);
      Blurb.hasMany(models.Movie);
      Blurb.hasMany(models.Trigger);
    };
  
    return Blurb;
  };