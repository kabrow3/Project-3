module.exports = function(sequelize, DataTypes) {
    var Trigger = sequelize.define("Trigger", {
      name: DataTypes.STRING
    });
  
    return Trigger;
  };