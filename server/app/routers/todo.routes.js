module.exports = (app) => {
  const todo = require('../controllers/todo.controller.js')
  const router = require('express').Router()

  // Create a new Todo
  router.post('/', todo.create)

  // Find all todo
  router.get('/', todo.findAll)

  // Find todo by uncompleted
  router.get('/uncompleted', todo.findByUnCompleted)

  // Find todo by id
  router.get('/:id', todo.findById)

  // update todo
  router.put('/:id', todo.update)

  // delete by id
  router.delete('/:id', todo.deleteById)

  app.use('/api/todo', router)
}
