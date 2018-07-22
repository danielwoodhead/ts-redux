import { IToDo } from "./types";

export function compareById(a: IToDo, b: IToDo): number {
    return a.id - b.id;
}