import { Component } from '@angular/core';
import { NgContentPlaygroundChild } from './ng-content-playground-child.component';

@Component({
  selector: 'ng-content-playground',
  imports: [NgContentPlaygroundChild],
  templateUrl: './ng-content-playground.component.html',
})
export class NgContentPlayground {}
