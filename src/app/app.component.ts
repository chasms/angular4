import { Component } from '@angular/core';

import { God } from './god';

import { GodService } from './god.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [GodService],
})

export class AppComponent {
	title = 'The Pantheon';
	gods: God[];
	selectedGod: God;

	constructor(private godService: GodService) { }

	ngOnInit(): void{}

	getGods(): void {
		this.gods = this.godService.getGods();
	}

	onSelect(god: God): void {
		this.selectedGod = god;
	}
}