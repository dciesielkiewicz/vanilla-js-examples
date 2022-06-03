export class TodoView {
  constructor(todo, onDelete, onToggle) {
    this.todo = todo;
    this.onDelete = onDelete;
    this.onToggle = onToggle;
  }

  delete () {
    this.todoItem.remove();
  }

  toggle (completed) {
    if (completed) {
      this.todoItem.classList.add('completed');
      return;
    }
    this.todoItem.classList.remove('completed');
  }

  updateCheckbox (checked) {
    this.checkbox.checked = checked;
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

  render ({ container }) {
    this.todoItem = document.createElement('div');
    this.todoItem.classList.add('todo-item');
    if (this.todo.completed) this.todoItem.classList.add('completed');
    this.todoItem.append(this.getCheckbox(), this.getTitle(), this.getDeleteButton());
    container.append(this.todoItem);
  }
}
