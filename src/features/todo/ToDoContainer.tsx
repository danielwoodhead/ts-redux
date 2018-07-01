import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../store';
import { ToDo } from './ToDoComponent';
import * as actions from './toDoActions';
import TodoApi from './toDoApi';

export function mapStateToProps({ todoState }: IStoreState) {
    return {
        todos: todoState.todos
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToDoAction>) {
    return {
        addNewTodo: () => addNewTodo(dispatch)
    }
}

function addNewTodo(dispatch: Dispatch<actions.ToDoAction>)
{
    const newTodo = {
        id: "5",
        description: "test5"
    };

    TodoApi.addNewTodo(newTodo)
        .then(savedTodo => dispatch(actions.addNewTodo(savedTodo)));
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);