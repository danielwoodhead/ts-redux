import * as React from 'react';
import { ITodo } from '../types';
import { ToDoRow } from './ToDoRow';

interface IProps
{
    todos: ITodo[];
}

export const ToDoList: React.SFC<IProps> = ({todos}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => <ToDoRow key={todo.id} todo={todo}/>)}
            </tbody>
        </table>
    );
}