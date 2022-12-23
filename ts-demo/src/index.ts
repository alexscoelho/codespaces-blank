import { ITodo, TodoStatus } from "./interfaces";
import { appendToFile, readFromFile } from "./utils";

class Todo implements ITodo {
    id: number;
    name: string;
    description: string;
    dateAdded: Date;
    dateFinished: Date;
    status: TodoStatus;
    
    constructor(name:string, description:string, status?: TodoStatus, dateFinished?: Date,) {
        this.id = Date.now(),
        this.name = name,
        this.description = description,
        this.dateAdded = new Date(),
        this.dateFinished = dateFinished || new Date(),
        this.status = status || TodoStatus.pending
    }

    private formatTodo(): string {
        return `${this.id} - ${this.name} was created on ${this.dateAdded} and is currently ${this.status}`
    }
    
    private async getTodos() {
        const todos = await readFromFile('todos.txt');
        console.dir(`Todos: \n" ${todos}`)
    }

    async saveTodo() {
        await appendToFile(this.formatTodo(), 'todos.txt');
        console.dir("Todo Saved.")
        this.getTodos()
    }
}

const args = process.argv.slice(2);

const todoName = args[0];
const todoDescription = args[1];
const todoDateFinished = args[2];
const todoStatus = args[3];

const firstTodo = new Todo(todoName, todoDescription);

firstTodo.saveTodo();