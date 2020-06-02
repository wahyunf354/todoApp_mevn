import http from '../http.js'

class TodoService {
  getAll () {
    return http.get('/todo')
  }
}

export default new TodoService()
