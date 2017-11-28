import { Component, Input, onChanges } from '@angular/core';
import { TodoItem } from './todo.model';
import { PriorityDirective } from './priority.directive';

@Component({
    selector: 'todo-item',
    template: `<div todo-priority>{{getTodoItemContent()}}</div>`,
    directives: [PriorityDirective]
})
export class TodoItemComponent implements onChanges {
    @Input() todo: TodoItem;

    ngOnChanges(changes: {}) {
        console.log(`Previous: ${JSON.stringify(changes.todo.previousValue)}]nCurrent: ${JSON.stringify(changes.todo.currentValue)}`);
    }

    getTodoItemContent() {
        return `${this.todo.priority}, ${this.todo.content}, ${this.todo.createdAt}`;
    }
}
