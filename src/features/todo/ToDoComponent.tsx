import * as React from 'react';
import { ITodo } from './types';

interface IProps
{
    todos: ITodo[];
    addNewTodo: () => any;
}

export const ToDo: React.SFC<IProps> = ({
    todos,
    addNewTodo
}) => {
    return (
        <div>
            {todos.map(x => <p key={x.id}>{x.description}</p>)}
            <button onClick={addNewTodo}>Click me</button>
        </div>
    );
};