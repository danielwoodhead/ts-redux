import * as React from 'react';

interface IProps
{
    todos: string[];
    addNewTodo: () => void;
}

export const ToDo: React.SFC<IProps> = ({
    todos,
    addNewTodo
}) => {
    return (
        <div>
            {todos.map(x => <p key={x}>{x}</p>)}
            <button onClick={addNewTodo}>Click me</button>
        </div>
    );
};