import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentInput } from 'components/component-input/component-input.component';
import { ComponentModelInput } from 'components/component-model-input/component-model-input.component';
import { ComponentOutput } from 'components/component-output/component-output.component';
import { ControlFlow } from 'components/control-flow/control-flow.component';
import { Forms } from 'components/forms/forms.component';
import { NgContentPlayground } from 'components/ng-content-playground/ng-content-playground.component';

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
