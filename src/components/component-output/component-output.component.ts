import { Component } from '@angular/core';
import { ComponentOutputChild } from './component-output-child.component';

@Component({
  selector: 'component-output',
  imports: [ComponentOutputChild],
  templateUrl: './component-output.component.html',
})
export class ComponentOutput {
  count = 0;

  countUp(): void {
    this.count++;
  }
}
