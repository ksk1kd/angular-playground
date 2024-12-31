import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentInput } from 'components/component-input/component-input.component';
import { ComponentOutput } from 'components/component-output/component-output.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentInput, ComponentOutput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
