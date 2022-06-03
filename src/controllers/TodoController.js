import { TodoService } from '../services/TodoService.js';
import { TodoFormView } from '../views/TodoFormView.js';
import { TodosView } from '../views/TodosView.js';

export class TodoController {
  constructor() {
    this.todoService = new TodoService();
    this.todoFormView = new TodoFormView(this.addTodo);
    this.todosView = new TodosView(this.deleteTodo, this.toggleTodo);
  }

  addTodo = async (todoData) => {
    const todo = await this.todoService.addTodo(todoData)
    this.todosView.append(todo);
  }
  deleteTodo = (id) => this.todoService.deleteTodo(id);
  toggleTodo = (id) => this.todoService.toggleTodo(id);

  async run() {
    await this.todoService.fetchAll();
    this.todoFormView.render();
    this.todosView.render(this.todoService.todos);
  }
}
