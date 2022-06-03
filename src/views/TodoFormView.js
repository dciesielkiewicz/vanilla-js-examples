export class TodoFormView {
  constructor(addTodo) {
    this.addTodo = addTodo;
  }

  clearInput() {
    this.input.value = '';
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const title = this.input.value;
    if (!title) {
      return;
    }
    try {
      await this.addTodo({
        completed: false,
        title
      });
      this.clearInput();
    } catch {
      alert('Something went wrong while adding todo')
    }
  }

  getInput() {
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Type your todo';
    return this.input;
  }

  getSubmitButton() {
    this.submitButton = document.createElement('button');
    this.submitButton.type = 'submit';
    this.submitButton.textContent = 'Submit';
    return this.submitButton;
  }

  render() {
    const app = document.getElementById('app');
    const form = document.createElement('form');
    form.classList.add('todo-form');
    form.onsubmit = this.onSubmit;
    form.append(this.getInput(), this.getSubmitButton())
    app.append(form);
  }
}
