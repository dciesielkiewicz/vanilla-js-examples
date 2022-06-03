export class TodoFormView {
  constructor(submitHandler) {
    this.submitHandler = submitHandler;
  }

  clearInput() {
    this.input.value = '';
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const title = this.input.value;
    this.submitHandler({ title });
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

  render({ container }) {
    const form = document.createElement('form');
    form.classList.add('todo-form');
    form.onsubmit = this.onSubmit;
    form.append(this.getInput(), this.getSubmitButton())
    container.append(form);
  }
}
