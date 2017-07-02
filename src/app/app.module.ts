import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { reducer } from './reducers';
import { TodosPageComponent } from './containers/todos-page.component';
import { TodosListComponent } from './components/todos-list.component';
import { TodoNewComponent } from './components/todo-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodosListComponent,
    TodoNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   