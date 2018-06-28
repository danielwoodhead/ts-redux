import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../store';
import { ToDo } from './ToDoComponent';
import * as actions from './toDoActions';

export function mapStateToProps({ todoState }: IStoreState) {
    return {
        todos: todoState.todos
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToDoAction>) {
    return {
        addNewTodo: () => dispatch(actions.addNewTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);