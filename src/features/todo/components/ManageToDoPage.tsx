import * as React from 'react';
import { FormControlProps } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { ToDoForm } from './ToDoForm';
import { IToDo } from '../types';

interface IProps {
    toDo: IToDo;
    saveToDo: (toDo: IToDo) => Promise<any>;
}

interface IState {
    toDo: IToDo;
    redirect: boolean;
}

export class ManageToDoPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            toDo: Object.assign({}, props.toDo),
            redirect: false
        };

        this.updateToDo = this.updateToDo.bind(this);
        this.saveToDo = this.saveToDo.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    public render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        return (
            <ToDoForm 
                toDo={this.state.toDo} 
                onToDoChanged={this.updateToDo}
                onSave={this.saveToDo} />
        );
    }

    private updateToDo(e: React.FormEvent<FormControlProps>): void {
        const field = e.currentTarget.name!;
        const toDo = Object.assign({}, this.state.toDo);
        toDo[field] = e.currentTarget.value;

        return this.setState({toDo});
    }

    private saveToDo(): void {
        this.props.saveToDo(this.state.toDo)
            .then(() => this.redirect());
    }

    private redirect(): void {
        this.setState({ redirect: true });
    }
}