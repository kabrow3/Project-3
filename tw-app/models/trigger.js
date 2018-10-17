module.exports = function(sequelize, DataTypes) {
    var Trigger = sequelize.define("Trigger", {
      name: DataTypes.STRING
    });
  
    Trigger.associate = function(models) {
      Trigger.belongsTo(models.Movie);
      Trigger.belongsTo(models.Trigger);
    };
  
    return Trigger;
  };