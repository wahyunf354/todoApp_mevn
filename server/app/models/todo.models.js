// Make table in database
module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    isCompleted: {
      type: Sequelize.BOOLEAN
    },
    priority: {
      type: Sequelize.STRING
    }
  })

  return Todo
}
