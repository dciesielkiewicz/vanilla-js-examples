import { TodoView } from '../views/TodoView.js';
export class TodoController {
  constructor(todo, deleteTodo, toggleTodo) {
    this.todo = todo;
    this.deleteTodo = deleteTodo;
    this.toggleTodo = toggleTodo;
    this.todoView = new TodoView(todo, this.onDelete, this.onToggle)
  }

  onDelete = async () => {
    try {
      if (!confirm(`Are you sure you want to delete todo: ${this.todo.title}?`)) return
      await this.deleteTodo();
      this.todoView.delete();
    } catch {
      alert('Something went wrong while delete todo')
    }
  }

  onToggle = async () => {
    try {
      await this.toggleTodo();
      this.todoView.toggle(this.todo.completed);
    } catch {
      this.todoView.updateCheckbox(this.todo.completed);
      alert('Something went wrong while toggling todo')
    }
  }

  run({ container }) {
    this.todoView.render({ container });
  }
}
