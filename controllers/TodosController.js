class TodosController {
  constructor(todoService, todosView, todoFormView){
    this.todoService = todoService;
    
    this.todosView = todosView;
    this.todosView.bindDeleteTodo(this.deleteTodo)
    this.todosView.bindToggleTodo(this.toggleTodo)
    
    this.todoFormView = todoFormView;
    this.todoFormView.bindAddTodo(this.addTodo)
  }

  addTodo = async (todoData) => {
    const todo = await this.todoService.addTodo(todoData);
    this.todosView.appendTodo(todo)
  }
  deleteTodo = (id) => this.todoService.deleteTodo(id)
  toggleTodo = async (todo) => {
    const completed = await this.todoService.toggleTodo(todo.id)
    todo.completed = completed;
  }

  async run() {
    this.todoFormView.render();
    await this.todoService.fetchTodos();
    this.todosView.render(this.todoService.todos);
  }
}
