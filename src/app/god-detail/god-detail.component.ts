import { Component, Input } from '@angular/core';

import { God } from '../god';

@Component({
	selector: 'god-detail',
	templateUrl: './god-detail.component.html',
	styleUrls: ['./god-detail.component.css']
})
export class GodDetailComponent {
	@Input() god: God;
}
