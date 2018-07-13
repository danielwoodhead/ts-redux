import * as actions from './toDoActions';
import { IToDoState } from './types';

export function toDos(state: IToDoState, action: actions.ToDoAction): IToDoState {
    if (state === undefined) {
        state = {
            toDos: []
        };
    }

    switch (action.type) {
        case actions.LOAD_TODOS:
            return { 
                toDos: action.toDos 
            };

        case actions.SAVE_TODO:
            return {
                toDos: [
                    ...state.toDos.filter(toDo => toDo.id !== action.toDo.id),
                    Object.assign({}, action.toDo)
                ]
            };

        default:
            return state;
    }
}