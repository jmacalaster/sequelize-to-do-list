module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define("todos", {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  });
  return todos;
};

