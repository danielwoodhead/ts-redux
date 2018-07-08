import * as React from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../types';

interface IProps
{
    todo: ITodo;
}

export const ToDoRow: React.SFC<IProps> = ({todo}) => {
    return (
        <tr>
            <td><Link to={'/todo/' + todo.id}>{todo.id}</Link></td>
            <td><Link to={'/todo/' + todo.id}>{todo.description}</Link></td>
        </tr>
    )
}