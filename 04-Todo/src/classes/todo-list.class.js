export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        //todo
    }

    marcarCompletado(id) {
        //todo
    }

    eiliminarCompletados(){
        // this.todos.filter(t => t.completado === true).pop();
    }
}