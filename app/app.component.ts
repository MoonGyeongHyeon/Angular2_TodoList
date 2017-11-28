import { Component } from '@angular/core';
import { TodoItem } from './todo/todo.model';
import { TodoInputComponent } from './todo-input.component';
import { TodoListComponent } from './todo/todos.component';

@Component({
    selector: 'todo-app',
    template: `
        <h1>{{title}}</h1>
        <todo-input (onNewInput)="newTodoItem($event)"></todo-input>
        <todo-list [todos]="todos"></todo-list>
    `,
    directives: [TodoInputComponent, TodoListComponent]
})
export class AppComponent {
    private title = 'Angular 2 Todo 리스트';
    private todos: TodoItem[];

    constructor() {
        this.todos = [];
    }

    private newTodoItem($event) {
        console.log(`New Item: ${JSON.stringify($event)}`)
        this.todos.push($event);
    }
}
