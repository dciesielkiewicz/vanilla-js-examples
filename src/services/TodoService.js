export class TodoService {
  async fetchAll() {
    try {
      return JSON.parse(localStorage.getItem('todos')) || []
    } catch {
      // Silently catch error. Just return empty data
      return []
    }
  }

  async updateTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}
