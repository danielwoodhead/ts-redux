import { IStoreState } from '.';
import { RootAction } from './rootActions';
import { enthusiasm } from '../features/hello/helloReducer';
import { todos } from '../features/todo/toDoReducer';
import { combineReducers, Reducer } from 'redux';

const rootReducer: Reducer<IStoreState, RootAction> = combineReducers<IStoreState, RootAction>({
    helloState: enthusiasm,
    todoState: todos
});

export default rootReducer;