import { Component, input, output } from '@angular/core';

@Component({
  selector: 'component-output-child',
  templateUrl: './component-output-child.component.html',
})
export class ComponentOutputChild {
  eventName = input.required<string>();
  someEvent = output<void>();

  handleClick(): void {
    this.someEvent.emit();
  }
}
