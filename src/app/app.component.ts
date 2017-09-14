import { Component } from '@angular/core';

export class God {
  id: number;
  name: string;
  description: string;
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
    name: "Xáos",
    description: `In Greek mythology, Chaos (Greek: Χάος), according to Hesiod,Chaos ("Chasm") was the first thing to exist: "at first Chaos came to be" (or was) "but next" (possibly out of Chaos) came Gaia, Tartarus, and Eros (elsewhere the son of Aphrodite). Unambiguously born "from Chaos" were Erebus (Darkness) and Nyx (Night).`,
  };
}