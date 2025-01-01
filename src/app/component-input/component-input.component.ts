import { Component } from '@angular/core';
import { ComponentInputChild } from './component-input-child.component';

@Component({
  selector: 'component-input',
  imports: [ComponentInputChild],
  templateUrl: './component-input.component.html',
})
export class ComponentInput {}
