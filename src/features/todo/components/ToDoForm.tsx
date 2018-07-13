import * as React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, FormControlProps } from 'react-bootstrap';
import { IToDo } from '../types';

interface IProps
{
    toDo: IToDo;
    onToDoChanged: (e: React.FormEvent<FormControlProps>) => void;
    onSave: () => void;
}

export const ToDoForm: React.SFC<IProps> = ({
    toDo, 
    onToDoChanged, 
    onSave
}) => {
    return (
        <div>
            <h1>Manage ToDo</h1>
            <form>
                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl 
                        type="text" 
                        name="description"
                        value={toDo.description}
                        onChange={onToDoChanged}/>
                </FormGroup>
                <Button 
                    bsStyle="primary" 
                    onClick={onSave}>Save</Button>
            </form>
        </div>
    );
}