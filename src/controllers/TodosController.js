import { Todo } from '../models/Todo.js';
import { TodoService } from '../services/TodoService.js';
import { TodosView } from '../views/TodosView.js';

import { TodoFormController } from './TodoFormContoller.js';

export class TodosController {
  todos = []

  constructor() {
    this.todoService = new TodoService();
    this.todoFormController = new TodoFormController(this.addTodo);
    this.todosView = new TodosView(this.deleteTodo, this.toggleTodo);
  }

  addTodo = async (todoData) => {
    const todo = new Todo(todoData);
    this.todos.push(todo);
    await this.todoService.updateTodos(this.todos);
    this.todosView.renderTodo(todo);
  }

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todoService.updateTodos(this.todos);
  }

  toggleTodo = async (id) => {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed
    await this.todoService.updateTodos(this.todos);
    return todo.completed;
  }

  async run({ container }) {
    this.todoFormController.run({ container });
    const todosResponse = await this.todoService.fetchAll()
    this.todos = todosResponse.map((todo) => new Todo(todo));
    this.todosView.render({ container, todos: this.todos });
  }
}
