module.exports = (app) => {
  const  todo = require('../controllers/todo.controller.js')
  const router = require('express').Router()

  // Create a new Todo
  router.post('/', todo.create)

  app.use('/api/todo', router)
}