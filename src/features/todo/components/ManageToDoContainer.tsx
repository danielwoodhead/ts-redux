import { connect } from 'react-redux';
import { IStoreState } from '../../../store';
import { ManageToDoPage } from './ManageToDoPage';
import { ITodo } from '../types';

export function mapStateToProps({ todoState }: IStoreState, ownProps: any) {
    const toDoId = ownProps.match.params.id;
    
    let toDo: ITodo | null = null;

    if (toDoId && todoState.todos.length > 0) {
        toDo = getToDoById(todoState.todos, toDoId);
    }

    if (toDo) {
        return { todo: toDo };
    }

    return { todo: { id: '', description: '' } };
}

function getToDoById(todos: ITodo[], id: string) {
    const existingToDo = todos.filter(toDo => toDo.id === id);

    if (existingToDo) {
        return existingToDo[0];
    }

    return null;
  }

export default connect(mapStateToProps)(ManageToDoPage);