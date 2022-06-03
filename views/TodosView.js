class TodosView {
  bindDeleteTodo(deleteTodo) {
    this.deleteTodo = deleteTodo;
  }

  bindToggleTodo(toggleTodo) {
    this.toggleTodo = toggleTodo;
  }

  appendTodo(todo) {
    const todoView = new TodoView(todo);
    todoView.bindDeleteTodo(this.deleteTodo)
    todoView.bindToggleTodo(this.toggleTodo)
    todoView.render()
  }

  renderContainer() {
    const app = document.getElementById('app')
    this.todoContainer = document.createElement('div');
    this.todoContainer.classList.add('todo-list');
    this.todoContainer.id = 'todo-list';
    app.append(this.todoContainer);
  }

  render(todos){
    this.renderContainer();
    todos.forEach((todo) => {
      const todoView = new TodoView(todo);
      todoView.bindDeleteTodo(this.deleteTodo)
      todoView.bindToggleTodo(this.toggleTodo)
      todoView.render()
    })
  }
}
