export class Todo {
    
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //devuelve un numero unico que representa a la fecha por lo cual puede tomarse como un id
        this.completado = false;
        this.creado = new Date();
    }
    
}