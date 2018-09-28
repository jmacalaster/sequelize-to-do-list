
// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function (app) {

  app.post("/api/todos", function(req, res) {
    db.todos.create({
      task: req.body.task,
      completed: req.body.completed
    }).then(function(dbtodos){
      res.json(dbtodos);
    });
  });


  app.put("/api/todos/:id", function(req, res) {
    db.todos.update({
      task: req.body.task,
      completed: req.body.completed
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbtodos) {
      res.json(dbtodos);
    });
  });

  app.delete("/api/todos/:id", function(req, res) {
    db.todos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbtodos) {
      res.json(dbtodos);
    });
  });

};

