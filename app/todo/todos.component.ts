import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { TodoItemComponent } from './todo.component';
import { TodoItem } from './todo.model';

@Component({
    selector: 'todo-list',
    template: `
  <div class="items">
    <todo-item *ngFor="let todo of todos" [todo]="todo"></todo-item>
  </div>
  `,
    directives: [TodoItemComponent]
})
export class TodoListComponent {
    @Input() todos: TodoItem[];
}
