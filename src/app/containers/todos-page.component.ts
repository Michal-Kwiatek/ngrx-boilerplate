import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as todo from '../actions/todos';
import * as fromRoot from '../reducers';
import { Todo } from '../models/todo';


@Component({
  selector: 'todos-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <todo-new class="row" (newTodo)="handleTodoCreate($event)"></todo-new>

      <todos-list class="row" [todos]="incompletedTodos$ | async" [config]="incompletedConfig" 
        (removeTodo)="handleRemove($event)" (stateChange)="handleStateChange($event)"> </todos-list>
      
      <todos-list class="row" [todos]="completedTodos$ | async" [config]="completedConfig" 
        (removeTodo)="handleRemove($event)" (stateChange)="handleStateChange($event)"> </todos-list>
    </div>
  `,
  styles: []
})
export class TodosPageComponent {
  completedTodos$: Observable<Todo[]>;
  incompletedTodos$: Observable<Todo[]>;
  
  completedConfig : Object = {
    title: "Completed tasks:",
    tooltip: "Restore",
    icon: "backburger"
  };

  incompletedConfig: Object = {
    title: "Tasks to do:",
    tooltip: "Mark as completed",
    icon: "check-circle-outline"
  };

  constructor(private store: Store<fromRoot.State>) {
    this.completedTodos$ = store.select(fromRoot.getCompletedTodos)
    this.incompletedTodos$ = store.select(fromRoot.getIncompletedTodos);
  }
  
  handleTodoCreate(name: string) {
    const newTodo: Todo = {
      id : (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(),
      completed: false,
      name,
    }
    
    this.store.dispatch(new todo.CreateNewTodoAction(newTodo))
  }

  handleStateChange(id: string) {
    this.store.dispatch(new todo.ChangeCompletedAction(id));
  }

  handleRemove(id: string) {
    this.store.dispatch(new todo.RemoveTodoAction(id));
  }

}
