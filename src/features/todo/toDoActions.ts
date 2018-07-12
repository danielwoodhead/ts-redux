import { IToDo } from "./types";

export const LOAD_TODOS = 'LOAD_TODOS';
export type LOAD_TODOS = typeof LOAD_TODOS;

export const SAVE_TODO = 'SAVE_TODO';
export type SAVE_TODO = typeof SAVE_TODO;

export interface ILoadToDos {
    type: LOAD_TODOS;
    toDos: IToDo[];
}

export interface ISaveToDo {
    type: SAVE_TODO;
    toDo: IToDo;
}

export type ToDoAction = ILoadToDos | ISaveToDo;

export function loadToDos(toDos: IToDo[]): ILoadToDos {
    return {
        type: LOAD_TODOS,
        toDos
    }
}

export function saveToDo(toDo: IToDo) : ISaveToDo {
    return {
        type: SAVE_TODO,
        toDo
    }
}