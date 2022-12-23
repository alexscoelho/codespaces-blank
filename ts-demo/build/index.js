"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const utils_1 = require("./utils");
class Todo {
    constructor(name, description, status, dateFinished) {
        this.id = Date.now(),
            this.name = name,
            this.description = description,
            this.dateAdded = new Date(),
            this.dateFinished = dateFinished || new Date(),
            this.status = status || interfaces_1.TodoStatus.pending;
    }
    formatTodo() {
        return `${this.id} - ${this.name} was created on ${this.dateAdded} and is currently ${this.status}`;
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield (0, utils_1.readFromFile)('todos.txt');
            console.dir(`Todos: \n" ${todos}`);
        });
    }
    saveTodo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, utils_1.appendToFile)(this.formatTodo(), 'todos.txt');
            console.dir("Todo Saved.");
            this.getTodos();
        });
    }
}
const args = process.argv.slice(2);
const todoName = args[0];
const todoDescription = args[1];
const todoDateFinished = args[2];
const todoStatus = args[3];
const firstTodo = new Todo(todoName, todoDescription);
firstTodo.saveTodo();
//# sourceMappingURL=index.js.map