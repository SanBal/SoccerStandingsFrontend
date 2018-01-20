import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  ` <app-header></app-header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
