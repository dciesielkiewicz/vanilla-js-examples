export class Todo {
  constructor({
    completed,
    title,
  }) {
    this.id = Math.random().toString();
    this.completed = completed;
    this.title = title;
  }
}
