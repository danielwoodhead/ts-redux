import { IHelloState } from '../features/hello/types';
import { IToDoState } from '../features/todo/types';

export interface IStoreState {
    helloState: IHelloState;
    toDoState: IToDoState;
}

export { default } from './store';