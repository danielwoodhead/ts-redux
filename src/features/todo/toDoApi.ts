import { IToDo } from "./types";

const toDos: IToDo[] = [
    { id: "3", description: "test3" },
    { id: "4", description: "test4" }
];

class ToDoApi {
    public static getAllTodos(): Promise<IToDo[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], toDos));
            }, 1000);
        });
    }

    public static saveToDo(toDo: IToDo): Promise<IToDo> {
        toDo = Object.assign({}, toDo);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingToDoIndex = toDos.findIndex(t => t.id === toDo.id);
                toDos.splice(existingToDoIndex, 1, toDo);
                resolve(toDo);
            }, 1000);
        });
    }
}

export default ToDoApi;