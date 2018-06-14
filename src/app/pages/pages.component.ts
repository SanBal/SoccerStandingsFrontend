import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  template:
  ` <app-header></app-header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
