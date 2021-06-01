import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  styles: [`.router-link-active 
              text-decoration: underline `]
})
export class AppComponent {
  title = 'angularInterview';
}
