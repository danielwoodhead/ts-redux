import { compareById } from "./functions";
import { IToDo } from "./types";

const toDos: IToDo[] = [
    { id: 1, description: "test1" },
    { id: 2, description: "test2" }
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
                if (toDo.id) {
                    const existingToDoIndex = toDos.findIndex(t => t.id === toDo.id);
                    toDos.splice(existingToDoIndex, 1, toDo);
                } else {
                    toDo.id = toDos.sort(compareById)[toDos.length - 1].id + 1;
                    toDos.push(toDo);
                }
                resolve(toDo);
            }, 1000);
        });
    }
}

export default ToDoApi;