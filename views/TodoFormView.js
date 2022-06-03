class TodoFormView {
  bindAddTodo(addTodo) {
    this.addTodo = addTodo;
  }

  getInput(){
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.name = 'title';
    return this.input;
  }

  getSubmitButton(){
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';
    return submit;
  }

  clearInput(){
    this.input.value = ''
  }

  submitHandler = async (event) => {
    event.preventDefault();
    const title = this.input.value;
    if (!title) {
      alert('Type some title');
      return;
    }

    try {
      const todoData = { completed: false, title };
      await this.addTodo(todoData)
      this.clearInput() 
    } catch (err) {
      console.log(err)
      alert('Something went wrong while adding todo')
    }
  }

  render(){
    const app = document.getElementById('app');
    const form = document.createElement('form');
    form.onsubmit = this.submitHandler
    form.append(this.getInput(), this.getSubmitButton())
    app.append(form)
  }
}
