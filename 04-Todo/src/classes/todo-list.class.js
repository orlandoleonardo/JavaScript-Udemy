export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarEnLocalStorage();
    }

    eliminarTodo(id) {
        this.todos.filter(todo => todo.id != id);
        this.guardarEnLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eiliminarCompletados(){
        this.todos= this.todos.filter(todo => todo.completado);
        this.guardarEnLocalStorage();
    }

    guardarEnLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? 
            JSON.parse(localStorage.getItem('todo')) : [];
    }
    
}