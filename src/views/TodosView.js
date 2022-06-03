import { TodoFormController } from '../controllers/TodoFormContoller.js';
import { TodoController } from '../controllers/TodoController.js';

export class TodosView {
  constructor(addTodo, deleteTodo, toggleTodo) {
    this.todoFormController = new TodoFormController(addTodo);
    this.deleteTodo = deleteTodo;
    this.toggleTodo = toggleTodo;
  }

  renderTodo(todo) {
    const deleteTodo = () => this.deleteTodo(todo.id);
    const toggleTodo = () => this.toggleTodo(todo.id);
    const todoController = new TodoController(todo, deleteTodo, toggleTodo)
    todoController.run({ container: this.todoList })
  }

  render ({ container, todos }) {
    this.todoFormController.run({ container });
    this.todoList = document.createElement('div');
    this.todoList.classList.add('todo-list');
    todos.forEach((todo) => {
      this.renderTodo(todo)
    });
    container.append(this.todoList)
  }
}
