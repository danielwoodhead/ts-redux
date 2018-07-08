import * as React from 'react';
import { ITodo } from '../types';
import { ToDoList } from './ToDoList';

interface IProps
{
    todos: ITodo[];
}

export class ToDosPage extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h2>ToDos</h2>
                <ToDoList todos={this.props.todos}/>
            </div>
        );
    }
}