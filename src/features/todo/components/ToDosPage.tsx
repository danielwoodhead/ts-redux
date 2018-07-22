import * as React from 'react';
import { Button } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { ToDoList } from './ToDoList';
import { IToDo } from '../types';

interface IProps extends RouteComponentProps<IProps> 
{
    toDos: IToDo[];
}

export class ToDosPage extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);

        this.redirectToAddToDo = this.redirectToAddToDo.bind(this);
    }

    public render() {
        return (
            <div>
                <h2>ToDos</h2>
                <ToDoList toDos={this.props.toDos}/>
                <Button bsStyle="primary" onClick={this.redirectToAddToDo}>Add</Button>
            </div>
        );
    }

    private redirectToAddToDo(): any {
        this.props.history.push('/todo');
    }
}