import './styles.css';
import {Todo, TodoList} from './classes';

const tarea = new Todo('Aprender JS');
const todoList = new TodoList();

todoList.nuevoTodo(tarea);