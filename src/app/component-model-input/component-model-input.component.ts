import { Component, signal } from '@angular/core';
import { ComponentModelInputChild } from './component-model-input-child.component';

@Component({
  selector: 'component-model-input',
  imports: [ComponentModelInputChild],
  templateUrl: './component-model-input.component.html',
})
export class ComponentModelInput {
  volume = signal(0);
}
