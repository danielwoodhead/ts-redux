import { DECREMENT_ENTHUSIASM, EnthusiasmAction, INCREMENT_ENTHUSIASM } from './helloActions';
import { IHelloState } from './types';

export function enthusiasm(state: IHelloState, action: EnthusiasmAction): IHelloState {
  if (state === undefined) {
    state = {
      languageName: "",
      enthusiasmLevel: 0
    };
  }

  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { 
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
      };

    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) 
      };

    default:
      return state;
  }
}