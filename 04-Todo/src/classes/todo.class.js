export class Todo {
    
    static fromJson({id, tarea, completado, creado}) {
        const tempTodo = new Todo(tarea);
        
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }   

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //devuelve un numero unico que representa a la fecha por lo cual puede tomarse como un id
        this.completado = false;
        this.creado = new Date();
    }
    
    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }

}