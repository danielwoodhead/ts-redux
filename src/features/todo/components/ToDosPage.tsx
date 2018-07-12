import * as React from 'react';
import { IToDo } from '../types';
import { ToDoList } from './ToDoList';

interface IProps
{
    toDos: IToDo[];
}

export class ToDosPage extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h2>ToDos</h2>
                <ToDoList toDos={this.props.toDos}/>
            </div>
        );
    }
}