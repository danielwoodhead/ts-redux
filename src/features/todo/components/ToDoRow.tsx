import * as React from 'react';
import { Link } from 'react-router-dom';
import { IToDo } from '../types';

interface IProps
{
    toDo: IToDo;
}

export const ToDoRow: React.SFC<IProps> = ({toDo}) => {
    return (
        <tr>
            <td><Link to={'/todo/' + toDo.id}>{toDo.id}</Link></td>
            <td><Link to={'/todo/' + toDo.id}>{toDo.description}</Link></td>
        </tr>
    )
}