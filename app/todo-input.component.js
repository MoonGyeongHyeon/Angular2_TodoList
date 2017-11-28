"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_model_1 = require('./todo/todo.model');
var TodoInputComponent = (function () {
    function TodoInputComponent() {
        this.onInputTodoItem = new core_1.EventEmitter();
        this.todoItem = new todo_model_1.TodoItem();
    }
    TodoInputComponent.prototype.addTodo = function () {
        this.todoItem.createdAt = new Date().toISOString().substr(0, 19);
        console.log("Added new todo item " + JSON.stringify(this.todoItem));
        this.onInputTodoItem.emit(this.todoItem);
        this.initTodo();
    };
    TodoInputComponent.prototype.initTodo = function () {
        this.todoItem = new todo_model_1.TodoItem();
    };
    __decorate([
        core_1.Output('onNewInput'), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoInputComponent.prototype, "onInputTodoItem", void 0);
    TodoInputComponent = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "\n  <div class=\"input-grp\">\n    <label for=\"priority\">\uC6B0\uC120\uC21C\uC704</label><input type=\"number\" name=\"priority\" [(ngModel)]=\"todoItem.priority\" />\n    <label for=\"content\">\uB0B4\uC6A9</label><input type=\"text\" name=\"content\" [(ngModel)]=\"todoItem.content\" />\n  </div>\n  <div class=\"btn-grp\">\n    <button type=\"button\" (click)=\"addTodo()\">\uCD94\uAC00</button>\n    <button type=\"button\" (click)=\"initTodo()\">\uB0B4\uC6A9 \uCD08\uAE30\uD654</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoInputComponent);
    return TodoInputComponent;
}());
exports.TodoInputComponent = TodoInputComponent;
//# sourceMappingURL=todo-input.component.js.map