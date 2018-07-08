import { connect } from 'react-redux';
import { IStoreState } from '../../../store';
import { ToDosPage } from './ToDosPage';

export function mapStateToProps({ todoState }: IStoreState) {
    return {
        todos: todoState.todos
    }
}

export default connect(mapStateToProps)(ToDosPage);