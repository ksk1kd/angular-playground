import { Component, input } from '@angular/core';

@Component({
  selector: 'component-input-child',
  templateUrl: './component-input-child.component.html',
})
export class ComponentInputChild {
  value = input.required<number>();
}
