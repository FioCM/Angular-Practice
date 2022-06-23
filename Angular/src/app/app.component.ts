import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  caracters:Array<string>=["Luffy","Zoro","Chopper"]
  caracters2:Array<string>=["Ace","Shanks","Nami"]
}
