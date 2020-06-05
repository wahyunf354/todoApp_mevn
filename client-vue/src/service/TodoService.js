import http from '../http.js'

class TodoService {
  getAll () {
    return http.get('/todo')
  }

  postTodo (data) {
    return http.post('/todo', data)
  }
}

export default new TodoService()
