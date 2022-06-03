import { Todo } from '../models/Todo.js';

export class TodoService {
  todos = []

  async fetchAll() {
    try {
      return this.todos = JSON.parse(localStorage.getItem('todos')) || []
    } catch {
      // Silently catch error. Just return empty data
      return []
    }
  }

  async addTodo(todoData) {
    const todo = new Todo(todoData);
    this.todos.push(todo);
    this.#updateTodos();
    return todo;
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.#updateTodos();
  }

  async toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed
    this.#updateTodos();
    return todo.completed;
  }

  async #updateTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
