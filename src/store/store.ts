import { createStore, AnyAction } from 'redux';
import { IStoreState } from '.';
import rootReducer from './rootReducer';
import { loadTodos } from '../features/todo';

function configureStore(initialState: IStoreState) {
    return createStore<IStoreState, AnyAction, any, any>(
        rootReducer, 
        initialState);
}

const store = configureStore({
    helloState: {
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    },
    todoState: {
        todos: []
    }
});

loadTodos(store);

export default store;