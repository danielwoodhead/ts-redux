import { EnthusiasmAction } from '../features/hello/helloActions';
import { ToDoAction } from '../features/todo/toDoActions';

export type RootAction = EnthusiasmAction | ToDoAction;