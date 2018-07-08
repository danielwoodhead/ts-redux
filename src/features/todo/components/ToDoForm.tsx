import * as React from 'react';
import { ITodo } from '../types';

interface IProps
{
    todo: ITodo;
    onToDoChanged: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const ToDoForm: React.SFC<IProps> = ({todo, onToDoChanged}) => {
    return (
        <form>
            <label>Description</label>
            <input 
                type="text" 
                name="description"
                value={todo.description}
                onChange={onToDoChanged}/>
        </form>
    );
}