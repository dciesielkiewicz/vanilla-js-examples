import { TodoFormView } from '../views/TodoFormView.js'

export class TodoFormController {
  constructor(addTodo) {
    this.addTodo = addTodo;
    this.todoFormView = new TodoFormView(this.submitHandler);
  }

  submitHandler = async ({ title }) => {
    if (!title) return;
    try {
      await this.addTodo({
        completed: false,
        title
      });
      this.todoFormView.clearInput();
    } catch {
      alert('Something went wrong while adding todo')
    }
  };

  run({ container }) {
    this.todoFormView.render({ container });
  }
}
