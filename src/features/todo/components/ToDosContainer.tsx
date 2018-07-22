import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IStoreState } from '../../../store';
import { ToDosPage } from './ToDosPage';

export function mapStateToProps({ toDoState }: IStoreState) {
    return {
        toDos: toDoState.toDos
    }
}

export default withRouter(connect(mapStateToProps)(ToDosPage));