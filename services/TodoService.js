class TodoService {
  todos = []

  async fetchTodos(){
    try {
      this.todos = JSON.parse(localStorage.getItem('todos'))
        .map((todo) => new Todo(todo)) || [];
    } catch {
      // Silently catch error
    }
  }

  async addTodo(todoData) {
    const todo = new Todo(todoData)
    this.todos.push(todo)
    this._updateTodos();
    return todo;
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._updateTodos();
  }

  async toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id)
    if (!todo) throw new Error("Can't find todo to toggle");
    todo.completed = !todo.completed
    this._updateTodos()
    return todo.completed;
  }

  async _updateTodos(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
