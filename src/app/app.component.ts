import { Component } from '@angular/core';

export class God {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Pantheon';
  god: God = {
    id: 1,
    name: "Xáos"
  };
}