import { connect } from 'react-redux';
import { IStoreState } from '../../../store';
import { ToDosPage } from './ToDosPage';

export function mapStateToProps({ toDoState }: IStoreState) {
    return {
        toDos: toDoState.toDos
    }
}

export default connect(mapStateToProps)(ToDosPage);