import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../store';
import * as actions from './helloActions';
import Hello from './HelloComponent';

export function mapStateToProps({ helloState }: IStoreState) {
    return {
        enthusiasmLevel: helloState.enthusiasmLevel,
        name: helloState.languageName,
    }
}
  
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);