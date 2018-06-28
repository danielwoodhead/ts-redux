import { Store } from "redux";
import TodoApi from './toDoApi';
import { loadToDos } from './toDoActions';

export const loadTodos = (store: Store) =>
{
    TodoApi.getAllTodos()
        .then(todos => store.dispatch(loadToDos(todos)));
}