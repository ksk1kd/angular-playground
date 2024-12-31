import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentInput } from 'components/component-input/component-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
