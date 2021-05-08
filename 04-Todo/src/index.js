import './styles.css';
import {Todo, TodoList} from './classes';

import {crearTodoHtml} from './js/componentes'

const tarea = new Todo('Aprender JS');
export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);