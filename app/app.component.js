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
var todo_input_component_1 = require('./todo-input.component');
var todos_component_1 = require('./todo/todos.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 Todo 리스트';
        this.todos = [];
    }
    AppComponent.prototype.newTodoItem = function ($event) {
        console.log("New Item: " + JSON.stringify($event));
        this.todos.push($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n        <h1>{{title}}</h1>\n        <todo-input (onNewInput)=\"newTodoItem($event)\"></todo-input>\n        <todo-list [todos]=\"todos\"></todo-list>\n    ",
            directives: [todo_input_component_1.TodoInputComponent, todos_component_1.TodoListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map