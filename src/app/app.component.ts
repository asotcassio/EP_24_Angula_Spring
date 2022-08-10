import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Tiu';
  userData = {
    user:'Cassio',
    email: 'asot@gmail.com'
  }

  title = 'ViewCacique  WEB';
}
