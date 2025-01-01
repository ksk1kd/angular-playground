import { Component, signal } from '@angular/core';

@Component({
  selector: 'control-flow',
  templateUrl: './control-flow.component.html',
})
export class ControlFlow {
  age = 25;
  hobbies = ['Running', 'Cooking'];
  job = 'enginner';
}
