import { Component } from '@angular/core';
import { ComponentInput } from 'app/component-input/component-input.component';
import { ComponentModelInput } from 'app/component-model-input/component-model-input.component';
import { ComponentOutput } from 'app/component-output/component-output.component';
import { ControlFlow } from 'app/control-flow/control-flow.component';
import { Forms } from 'app/forms/forms.component';
import { NgContentPlayground } from 'app/ng-content-playground/ng-content-playground.component';

@Component({
  selector: 'top-page',
  imports: [
    ComponentInput,
    ComponentOutput,
    ComponentModelInput,
    NgContentPlayground,
    ControlFlow,
    Forms,
  ],
  templateUrl: './top-page.component.html',
})
export class TopPage {}
