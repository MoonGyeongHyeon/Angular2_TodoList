import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './todo/todo.model';

@Component({
    selector: 'todo-input',
    template: `
  <div class="input-grp">
    <label for="priority">우선순위</label><input type="number" name="priority" [(ngModel)]="todoItem.priority" />
    <label for="content">내용</label><input type="text" name="content" [(ngModel)]="todoItem.content" />
  </div>
  <div class="btn-grp">
    <button type="button" (click)="addTodo()">추가</button>
    <button type="button" (click)="initTodo()">내용 초기화</button>
  </div>
  `
})
export class TodoInputComponent {
    @Output('onNewInput') onInputTodoItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
    private todoItem: TodoItem;

    constructor() {
        this.todoItem = new TodoItem();
    }

    private addTodo() {
        this.todoItem.createdAt = new Date().toISOString().substr(0,19);
        console.log(`Added new todo item ${JSON.stringify(this.todoItem)}`);
        this.onInputTodoItem.emit(this.todoItem);

        this.initTodo();
    }

    private initTodo() {
        this.todoItem = new TodoItem();
    }
}
