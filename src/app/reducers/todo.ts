import * as todo from '../actions/todos';
import { Todo } from '../models/todo';


export interface State {
  todos: Todo[];
};

export const initialState: State = {
  todos: []
};

export function reducer(state = initialState, action: todo.Actions): State {
  switch (action.type) {

    case todo.NEW: {
      const todos = [...state.todos, action.payload];

      return { todos };
    }

    case todo.CHANGE_COMPLETED_STATE: {
      const targetId = action.payload;
    
      const todos = state.todos.map(todo => {
        if (todo.id === targetId) {
          const state = todo.completed;
          return {...todo, completed: !state};
        }
        return todo;
      })
      
      return {todos};
    }

    case todo.REMOVE: {
      const targetId = action.payload;

      return {
        todos: state.todos.filter(todo => todo.id !== targetId)
      };
    }

    default: {
      return state;
    }
  }
}


export const getAll = (state: State) => state.todos;
