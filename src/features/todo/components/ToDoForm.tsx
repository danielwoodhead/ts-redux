import * as React from 'react';
import { IToDo } from '../types';

interface IProps
{
    toDo: IToDo;
    onToDoChanged: (e: React.FormEvent<HTMLInputElement>) => void;
    onSave: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const ToDoForm: React.SFC<IProps> = ({
    toDo, 
    onToDoChanged, 
    onSave
}) => {
    return (
        <form>
            <h1>Manage ToDo</h1>
            <label>Description</label>
            <input 
                type="text" 
                name="description"
                value={toDo.description}
                onChange={onToDoChanged}/>
            <input
                type="submit"
                value='Save'
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
}