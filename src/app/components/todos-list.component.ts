import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todos-list',
  template: `
    <div class="col s12 m10 l6 offset-m1 offset-l3">
      <p *ngIf="!todos.length">
        No todos found.
      </p>

        <mz-collection *ngIf="todos.length">
          <mz-collection-header> <h4> {{config.title}} </h4> </mz-collection-header>
          <mz-collection-item *ngFor="let todo of todos">
            <span [ngClass]="{'todo-name': config.tooltip=='Restore'}"> {{ todo.name }} </span>
            <span (click)="removeTodo.emit(todo.id)" mz-secondary-content mz-tooltip [tooltip]="'Delete'" [position]="'right'" [delay]="100">
              <i class="red-text" mz-icon-mdi [icon]="'delete'"></i>
            </span>
            <span (click)="stateChange.emit(todo.id)" mz-secondary-content mz-tooltip [tooltip]="config.tooltip" [position]="'left'" [delay]="100">
              <i mz-icon-mdi [icon]="config.icon"></i>
            </span>
          </mz-collection-item>
        </mz-collection>

    </div>
  `,
  styles: [`
    .todo-name {
      text-decoration: line-through;
    }

    span {
      cursor: pointer;
    }
  `]
})
export class TodosListComponent {
  @Input() todos: Todo[];
  @Input() config;
  @Output() stateChange: EventEmitter<string> = new EventEmitter();
  @Output() removeTodo: EventEmitter<string> = new EventEmitter();

}
