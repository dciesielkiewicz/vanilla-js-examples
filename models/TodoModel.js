class Todo {
  constructor ({
    title,
    completed,
  }) {
    this.id = Math.random().toString();
    this.title = title;
    this.completed = completed;
  }
}
