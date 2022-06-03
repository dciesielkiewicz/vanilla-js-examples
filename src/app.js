import { TodosController } from './controllers/TodosController.js';

const app = document.getElementById('app');
const todosController = new TodosController();
todosController.run({ container: app })
