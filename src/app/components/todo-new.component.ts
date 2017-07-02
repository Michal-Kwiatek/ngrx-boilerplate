import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-new',
  template: `
    <form #frm (ngSubmit)="newTodo.emit(input.value); frm.reset()" class="col s12 m10 l6 offset-m1 offset-l3">
      <mz-input-container class="col s10 xl11">
        <input #input mz-input
          [label]="'What do you have to do?'"
          id="taskName-input"
          type="text">
      </mz-input-container>
      <div class="submitContainer right-align">
        <button type="submit" float="true" mz-button><i mz-icon-mdi [icon]="'plus'"></i></button>
      </div>
    </form>
  `,
  styles: [`
    .submitContainer {
      margin-top: 20px;
    }
  `]
})
export class TodoNewComponent {
   @Output() newTodo: EventEmitter<string> = new EventEmitter();
}
