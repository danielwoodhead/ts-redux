import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../../store';
import { ManageToDoPage } from './ManageToDoPage';
import * as actions from '../toDoActions';
import { IToDo } from '../types';
import ToDoApi from '../toDoApi';

export function mapStateToProps({ toDoState }: IStoreState, ownProps: any) {
    debugger;
    const toDoId = ownProps.match.params.id;
    
    let toDo: IToDo | null = null;

    if (toDoId && toDoState.toDos.length > 0) {
        toDo = getToDoById(toDoState.toDos, toDoId);
    }

    if (toDo) {
        return { toDo };
    }

    return { toDo: { id: '', description: '' } };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToDoAction>) {
    return {
        saveToDo: (toDo: IToDo) => saveToDo(toDo, dispatch)
    }
}
    
function getToDoById(todos: IToDo[], id: string) {
    const existingToDo = todos.filter(toDo => toDo.id === id);

    if (existingToDo) {
        return existingToDo[0];
    }

    return null;
}

function saveToDo(toDo: IToDo, dispatch: Dispatch<actions.ToDoAction>) {
    return ToDoApi.saveToDo(toDo)
        .then(savedToDo => dispatch(actions.saveToDo(savedToDo)));
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageToDoPage);