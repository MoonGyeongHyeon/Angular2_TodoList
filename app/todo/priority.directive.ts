import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[todo-priority]'
})
export class PriorityDirective {

    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'priority-grp', true);
    }
}
