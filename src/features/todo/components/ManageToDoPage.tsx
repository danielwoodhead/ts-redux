import * as React from 'react';
import { ToDoForm } from './ToDoForm';
import { ITodo } from '../types';

interface IProps {
    todo: ITodo;
}

interface IState {
    todo: ITodo;
}

export class ManageToDoPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            todo: Object.assign({}, props.todo)
        };
    }

    public render() {
        return (
            <ToDoForm 
                todo={this.state.todo} 
                onToDoChanged={this.updateToDo} />
        );
    }

    private updateToDo = (e: React.FormEvent<HTMLInputElement>): void => {
        const field = e.currentTarget.name;
        const toDo = Object.assign({}, this.state.todo);
        toDo[field] = e.currentTarget.value;

        return this.setState({todo: toDo});
    }
}