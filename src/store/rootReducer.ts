import { IStoreState } from '.';
import { RootAction } from './rootActions';
import { enthusiasm } from '../features/hello/helloReducer';
import { toDos } from '../features/todo/toDoReducer';
import { combineReducers, Reducer } from 'redux';

const rootReducer: Reducer<IStoreState, RootAction> = combineReducers<IStoreState, RootAction>({
    helloState: enthusiasm,
    toDoState: toDos
});

export default rootReducer;