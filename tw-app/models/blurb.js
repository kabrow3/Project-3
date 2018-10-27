module.exports = function(sequelize, DataTypes) {
    var Blurb = sequelize.define("Blurb", {
      blurb: DataTypes.TEXT
    });
  
    Blurb.associate = function(models) {
      Blurb.belongsTo(models.User);
      Blurb.belongsTo(models.Movie);
      Blurb.belongsTo(models.Trigger);
    };
  
    return Blurb;
  };