import { Component } from '@angular/core';

export class God {
  id: number;
  name: string;
  description: string;
}

const GODS: God[] = [
  { id: 1,
    name: 'Chaos',
    description: `In Greek mythology, Chaos (Greek: Χάος), according to Hesiod,Chaos ("Chasm") was the first thing to exist: "at first Chaos came to be" (or was) "but next" (possibly out of Chaos) came Gaia, Tartarus, and Eros (elsewhere the son of Aphrodite). Unambiguously born "from Chaos" were Erebus (Darkness) and Nyx (Night).`,
  },
  {
    id: 2,
    name: 'Aether',
    description: ``,
  },
  {
    id: 3,
    name: 'Aion',
    description: ``,
  },
  {
    id: 4,
    name: 'Ananke',
    description: ``,
  },
  {
    id: 5,
    name: 'Chronos',
    description: ``,
  },
  {
    id: 6,
    name: 'Erebus',
    description: ``,
  },
  {
    id: 7,
    name: 'Eros',
    description: ``,
  },
  {
    id: 8,
    name: 'Gaia',
    description: ``,
  },
  {
    id: 9,
    name: 'Hemera',
    description: ``,
  },
  {
    id: 10,
    name: 'Nyx',
    description: ``,
  },
  {
    id: 11,
    name: 'Phanes',
    description: ``,
  },
  {
    id: 12,
    name: 'Pontus',
    description: ``,
  },
  {
    id: 13,
    name: 'Tartarus',
    description: ``,
  },
  {
    id: 14,
    name: 'Thalassa',
    description: ``,
  },
  {
    id: 15,
    name: 'Uranus',
    description: ``,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Pantheon';
  gods = GODS;
  god = GODS[0];
}