class TodoView {
  constructor(todo) {
    this.todo = todo;
  }

  bindDeleteTodo(deleteTodo) {
    this.deleteTodo = deleteTodo;
  }

  bindToggleTodo(toggleTodo) {
    this.toggleTodo = toggleTodo;
  }

  removeItem () {
    this.todoItem.remove()
  }

  onDelete = async () => {
    if(!confirm("Are you sure?")) return
    try {
      await this.deleteTodo(this.todo.id)
      this.removeItem()
    } catch {
      alert('Something went wrong while toggling todo')
    }
  }

  onToggle = async () => {
    const initialCompleted = this.todo.completed;
    try {
      await this.toggleTodo(this.todo)
      this.title.replaceWith(this.getTitle())
    } catch (err) {
      console.log(err)
      this.checkbox.checked = initialCompleted;
      alert('Something went wrong while toggling todo')
    }
  }

  getCheckbox () {
    this.checkbox = document.createElement('input');
    this.checkbox.checked = this.todo.completed;
    this.checkbox.type = 'checkbox';
    this.checkbox.onchange = this.onToggle
    return this.checkbox
  }

  getTitle () {
    this.title = document.createElement(this.todo.completed ? 's' : 'span');
    this.title.textContent = this.todo.title;
    return this.title;
  }

  getDeleteButton () {
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = this.onDelete;
    return deleteButton;
  }

  render () {
    const todoList = document.getElementById('todo-list')
    this.todoItem = document.createElement('div');
    this.todoItem.classList.add('todo-item')
    this.todoItem.append(
      this.getCheckbox(),
      this.getTitle(),
      this.getDeleteButton()
    );
    todoList.append(this.todoItem)
  }
}
