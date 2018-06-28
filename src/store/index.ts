import { IHelloState } from '../features/hello/types';
import { ITodoState } from '../features/todo/types';

export interface IStoreState {
    helloState: IHelloState;
    todoState: ITodoState;
}

export { default } from './store';