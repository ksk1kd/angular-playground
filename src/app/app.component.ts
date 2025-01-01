import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentInput } from './component-input/component-input.component';
import { ComponentModelInput } from './component-model-input/component-model-input.component';
import { ComponentOutput } from './component-output/component-output.component';
import { ControlFlow } from './control-flow/control-flow.component';
import { Forms } from './forms/forms.component';
import { NgContentPlayground } from './ng-content-playground/ng-content-playground.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponentInput,
    ComponentOutput,
    ComponentModelInput,
    NgContentPlayground,
    ControlFlow,
    Forms,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
