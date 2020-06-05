import http from '../http.js'

class TodoService {
  getAll () {
    return http.get('/todo')
  }

  postTodo (data) {
    return http.post('/todo', data)
  }

  deleteTodo (id) {
    return http.delete(`/todo/${id}`)
  }
}

export default new TodoService()
