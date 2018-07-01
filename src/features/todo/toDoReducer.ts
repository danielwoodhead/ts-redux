import * as actions from './toDoActions';
import { ITodoState } from './types';

export function todos(state: ITodoState, action: actions.ToDoAction): ITodoState {
  if (state === undefined) {
    state = {
      todos: []
    };
  }

  switch (action.type) {
    case actions.LOAD_TODOS:
      return { 
        todos: action.todos 
      };
    
    case actions.ADD_NEW_TODO:
      return { 
        todos: [ ...state.todos, action.todo ]
      };

    default:
      return state;
  }
}