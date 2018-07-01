import { ITodo } from "./types";

export const LOAD_TODOS = 'LOAD_TODOS';
export type LOAD_TODOS = typeof LOAD_TODOS;

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export type ADD_NEW_TODO = typeof ADD_NEW_TODO;

export interface ILoadToDos {
    type: LOAD_TODOS;
    todos: ITodo[];
}

export interface IAddNewTodo {
    type: ADD_NEW_TODO;
    todo: ITodo;
}

export type ToDoAction = ILoadToDos | IAddNewTodo;

export function loadToDos(todos: ITodo[]): ILoadToDos {
    return {
        type: LOAD_TODOS,
        todos
    }
}

export function addNewTodo(todo: ITodo): IAddNewTodo {
    return {
        type: ADD_NEW_TODO,
        todo
    }
}