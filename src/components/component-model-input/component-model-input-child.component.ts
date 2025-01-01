import { Component, model } from '@angular/core';

@Component({
  selector: 'component-model-input-child',
  templateUrl: './component-model-input-child.component.html',
})
export class ComponentModelInputChild {
  value = model(0);

  handleClick() {
    this.value.update((oldValue) => oldValue + 10);
  }
}
