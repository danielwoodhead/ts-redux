import * as React from 'react';
import { IToDo } from '../types';
import { ToDoRow } from './ToDoRow';

interface IProps
{
    toDos: IToDo[];
}

export const ToDoList: React.SFC<IProps> = ({toDos}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map(toDo => <ToDoRow key={toDo.id} toDo={toDo}/>)}
            </tbody>
        </table>
    );
}