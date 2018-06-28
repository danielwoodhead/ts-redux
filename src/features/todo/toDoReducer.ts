import { LOAD_TODOS, ToDoAction } from './toDoActions';
import { ITodoState } from './types';

export function todos(state: ITodoState, action: ToDoAction): ITodoState {
  if (state === undefined) {
    state = {
      todos: []
    };
  }

  switch (action.type) {
    case LOAD_TODOS:
      return { ...state, todos: action.todos };
      
    default:
      return state;
  }
}