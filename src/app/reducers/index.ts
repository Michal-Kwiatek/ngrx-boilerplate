import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromTodo from './todo';
import { Todo } from '../models/todo';

export interface State {
  todo: fromTodo.State;
}

const reducers = {
  todo: fromTodo.reducer
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


export const getTodoState = (state: State) => state.todo;

export const getAllTodos = createSelector(getTodoState, fromTodo.getAll)

export const getCompletedTodos = createSelector(getAllTodos, (todos: Todo[]) => {
  return todos.filter( (todo: Todo) => todo.completed)
})

export const getIncompletedTodos = createSelector(getAllTodos, (todos: Todo[]) => {
  return todos.filter( (todo: Todo) => !todo.completed)
})


