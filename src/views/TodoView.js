export class TodoView {
  constructor(deleteTodo, toggleTodo) {
    this.deleteTodo = deleteTodo;
    this.toggleTodo = toggleTodo;
  }

  toggle () {
    if (this.todo.completed) {
      this.todoItem.classList.add('completed');
      return;
    }
    this.todoItem.classList.remove('completed');
  }

  delete () {
    this.todoItem.remove();
  }

  onToggle = async () => {
    try {
      await this.toggleTodo(this.todo.id);
      this.toggle();
    } catch {
      alert('Something went wrong while toggling todo')
      this.checkbox.checked = this.todo.completed
    }
  }

  onDelete = async () => {
    try {
      if (!confirm(`Are you sure you want to delete todo: ${this.todo.title}?`)) return
      await this.deleteTodo(this.todo.id);
      this.delete();
    } catch {
      alert('Something went wrong while delete todo')
    }
  }

  getCheckbox() {
    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = this.todo.completed;
    this.checkbox.onchange = this.onToggle
    return this.checkbox;
  }

  getTitle() {
    const title = document.createElement('span');
    title.textContent = this.todo.title;
    return title;
  }

  getDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = this.onDelete;
    return deleteButton;
  }

  render ({ container, todo }) {
    this.todo = todo;
    this.todoItem = document.createElement('div');
    this.todoItem.classList.add('todo-item');
    if (this.todo.completed) this.todoItem.classList.add('completed');
    this.todoItem.append(this.getCheckbox(), this.getTitle(), this.getDeleteButton());
    container.append(this.todoItem);
  }
}
