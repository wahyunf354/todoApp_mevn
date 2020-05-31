module.exports = (app) => {
  const todo = require('../controllers/todo.controller.js')
  const router = require('express').Router()

  // Create a new Todo
  router.post('/', todo.create)

  // Find all todo
  router.get('/', todo.findAll)

  // Find todo by id
  router.get('/:id', todo.findById)

  // delete by id
  router.delete('/:id', todo.deleteById)

  app.use('/api/todo', router)
}
