import { Injectable } from '@angular/core';

import { God } from './god';
import { GODS } from './mock-gods';

@Injectable()
export class GodService {
	getGods(): God[] {
		return GODS;
	}
}
