const db = require('../models')
const Todo = db.todos
const { Op } = db.Sequelize

// Method Create
exports.create = (req, res) => {
  // Validasi Todo
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content cann\'t be empty'
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
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the post'
      })
    })
}

// Method get all todo
exports.findAll = (req, res) => {
  const { title } = req.query
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null
  if (!condition) {
    const { description } = req.query
    condition = description ? { description: { [Op.like]: `%${description}%` } } : null
  }

  Todo.findAll({ where: condition })
    .then(result => res.send(result))
    .catch(err => res.status(500).send({
      message: err.message || 'Some error occured while find post'
    }))
}

// Method get one todo by ID
exports.findById = (req, res) => {
  const { id } = req.params

  Todo.findByPk(id)
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        res.send({
          message: 'Todo is not found'
        })
      }
    })
    .catch(err => res.status(500).send({
      message: `Error retrieving todo with id = ${id}`,
      error: err
    }))
}

// Find Todo UnCompleted
exports.findByUnCompleted = (req, res) => {
  Todo.findAll({ where: { isCompleted: false } })
    .then(result => {
      res.status(200).send({ data: result, message: 'Get Success' })
    })
    .catch(err => {
      res.status(500).send({ message: err.message || 'Some error occured retrieving todos' })
    })
}

// Find Todo Priority
exports.findPriority = (req, res) => {
  Todo.findAll({ where: { priority: req.params.priority } })
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      res.status(500).send({ error: err })
    })
}

// Method Update
exports.update = (req, res) => {
  const { id } = req.params
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    isCompleted: req.body.isCompleted
  }

  Todo.update(todo, { where: { id } })
    .then(result => {
      if (result[0] === 1) {
        res.status(200).send({
          message: 'Success Update Todo',
          result,
          data: todo
        })
      } else {
        res.send({
          message: 'Todo not Found'
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error update Data'
      })
    })
}

// Method Delete
exports.deleteById = (req, res) => {
  const { id } = req.params

  Todo.destroy({ where: { id } })
    .then(result => {
      if (result === 1) {
        res.send({
          message: 'Todo was deleted successfully'
        })
      } else {
        res.send({
          message: 'Cann\'t deleted Todo'
        })
      }
    })
    .catch(err => res.status(500).send(err))
}
