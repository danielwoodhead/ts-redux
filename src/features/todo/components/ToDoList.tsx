import * as React from 'react';
import { Table } from 'react-bootstrap';
import { IToDo } from '../types';
import { ToDoRow } from './ToDoRow';

interface IProps
{
    toDos: IToDo[];
}

export const ToDoList: React.SFC<IProps> = ({toDos}) => {
    return (
        <Table striped={true} bordered={true} condensed={true} hover={true}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map(toDo => <ToDoRow key={toDo.id} toDo={toDo}/>)}
            </tbody>
        </Table>
    );
}