import { ITodo } from "./types";

const todos: ITodo[] = [
    { id: "3", description: "test3" },
    { id: "4", description: "test4" }
];

class TodoApi {
    public static getAllTodos(): Promise<ITodo[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], todos));
            }, 1000);
        });
    }

    public static addNewTodo(todo: ITodo): Promise<ITodo> {
        todo = Object.assign({}, todo);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                todos.push(todo);
                resolve(todo);
            }, 1000);
        });
    }
}

export default TodoApi;