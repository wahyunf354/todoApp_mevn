import http from '../http.js'

class TodoService {
  getAll () {
    return http.get('/todo')
  }

  getByPriority (priority) {
    return http.get(`/todo/${priority}`)
  }

  getById (id) {
    return http.get(`/todo/edit/${id}`)
  }

  postTodo (data) {
    return http.post('/todo', data)
  }

  deleteTodo (id) {
    return http.delete(`/todo/${id}`)
  }

  editTodo (id, data) {
    return http.put(`/todo/${id}`, data)
  }
}

export default new TodoService()
