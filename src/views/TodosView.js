import { TodoView } from './TodoView.js';

export class TodosView {
  constructor(deleteTodo, toggleTodo) {
    this.deleteTodo = deleteTodo;
    this.toggleTodo = toggleTodo;
  }

  append(todo) {
    const todoView = new TodoView(this.deleteTodo, this.toggleTodo)
    todoView.render({
      container: this.todoList,
      todo,
    })
  }

  render (todos) {
    this.todoList = document.createElement('div');
    this.todoList.classList.add('todo-list');
    todos.forEach((todo) => {
      const todoView = new TodoView(this.deleteTodo, this.toggleTodo)
      todoView.render({
        container: this.todoList,
        todo,
      })
    });
    app.append(this.todoList)
  }
}
