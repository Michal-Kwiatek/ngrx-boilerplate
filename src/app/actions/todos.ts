import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const NEW =              '[Todo] New';
export const REMOVE =           '[Todo] Remove';
export const CHANGE_COMPLETED_STATE = '[Todo] Completed state change';


export class CreateNewTodoAction implements Action {
  readonly type = NEW;

  constructor(public payload: Todo) { }
}

export class ChangeCompletedAction implements Action {
  readonly type = CHANGE_COMPLETED_STATE;

  constructor(public payload: string) { }
}

export class RemoveTodoAction implements Action {
  readonly type = REMOVE;

  constructor(public payload: string) { }
}

export type Actions
  = CreateNewTodoAction
  | ChangeCompletedAction
  | RemoveTodoAction;
