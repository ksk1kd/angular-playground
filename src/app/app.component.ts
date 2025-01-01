import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentInput } from 'components/component-input/component-input.component';
import { ComponentModelInput } from 'components/component-model-input/component-model-input.component';
import { ComponentOutput } from 'components/component-output/component-output.component';
import { NgContentPlayground } from 'components/ng-content-playground/ng-content-playground.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponentInput,
    ComponentOutput,
    ComponentModelInput,
    NgContentPlayground,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
