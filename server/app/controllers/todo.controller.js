const db = require('../models')
const Todo = db.todos
const Op = db.Sequelize.Op

// Method Create
exports.create = (req, res) => {
  // Validasi Todo
  if (!req.body.title) {
    res.status(400).send({
      message: `Content cann't be empty`
    }) 
  }

  // Create Todo
  const todo = {
    title: req.body.title,
    description: req.body.description,
    isCompleted: req.body.isCompleted,
    priority: req.body.priority
  }

  Todo.create(todo)
    .then((result => {
      res.send(result)
    }))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the post'
      })
    })
}
